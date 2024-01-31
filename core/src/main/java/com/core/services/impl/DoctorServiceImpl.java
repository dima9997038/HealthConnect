package com.core.services.impl;

import com.core.convertors.DoctorDtoToDoctorConvertor;
import com.core.convertors.DoctorToDoctorDtoConvertor;
import com.core.dto.DoctorDto;
import com.core.models.Doctor;
import com.core.models.TypeAppointment;
import com.core.repositories.DoctorRepository;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class DoctorServiceImpl implements DoctorService {
    private final DoctorRepository doctorRepository;
    private final TypeAppointmentRepository typeAppointmentRepository;
    private final DoctorDtoToDoctorConvertor doctorDtoToDoctorConvertor;
    private final DoctorToDoctorDtoConvertor doctorToDoctorDtoConvertor;

    @Override
    public DoctorDto addDoctor(DoctorDto doctorDto) {
        Optional<TypeAppointment> typeAppointmentByName = typeAppointmentRepository.findTypeAppointmentByName(doctorDto.getTypeAppointment());
        Doctor convert = doctorDtoToDoctorConvertor.convert(doctorDto);
        if (typeAppointmentByName.isPresent()) {
            convert.setTypeAppointment(typeAppointmentByName.get());
        }
        Doctor save = doctorRepository.save(convert);
        return doctorToDoctorDtoConvertor.convert(save);
    }

    @Override
    public List<DoctorDto> getDoctorsByAppointments(Integer appointmentId) {
        return doctorRepository.findAll()
                .stream()
                .filter(doctor -> doctor.getTypeAppointment().getId() == appointmentId)
                .map(doctorToDoctorDtoConvertor::convert)
                .toList();

    }
}
