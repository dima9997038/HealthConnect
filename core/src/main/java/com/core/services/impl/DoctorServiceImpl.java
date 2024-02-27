package com.core.services.impl;

import com.core.convertors.ClientToClientDtoConvertor;
import com.core.convertors.DoctorDtoToDoctorConvertor;
import com.core.convertors.DoctorToDoctorDtoConvertor;
import com.core.dto.ClientDto;
import com.core.dto.DoctorDto;
import com.core.dto.DescriptionClientDto;
import com.core.enums.UserRole;
import com.core.models.Client;
import com.core.models.Doctor;
import com.core.models.TypeAppointment;
import com.core.repositories.ClientRepository;
import com.core.repositories.DoctorRepository;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;
    private final ClientRepository clientRepository;
    private final ClientToClientDtoConvertor clientToClientDtoConvertor;

    @Override
    public DoctorDto addDoctor(DoctorDto doctorDto) {
        Optional<TypeAppointment> typeAppointmentByName = typeAppointmentRepository.findTypeAppointmentByName(doctorDto.getTypeAppointment());
        Doctor convert = doctorDtoToDoctorConvertor.convert(doctorDto);
        if (typeAppointmentByName.isPresent()) {
            convert.setTypeAppointment(typeAppointmentByName.get());
        }
        convert.setPassword(passwordEncoder.encode(convert.getPassword()));
        convert.getUserRoles().add(UserRole.ROLE_DOCTOR);
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

    @Override
    public List<DoctorDto> getAll() {
        return doctorRepository.findAll()
                .stream()
                .map(doctorToDoctorDtoConvertor::convert)
                .toList();
    }

    @Override
    public DoctorDto changeDoctor(DoctorDto doctorDto) {
        Optional<Doctor> doctorOptional = doctorRepository.findById(doctorDto.getId());
        if (doctorOptional.isPresent()) {
            Doctor doctor = doctorOptional.get();
            doctor.setLogin(doctorDto.getLogin());
            doctor.setPassword(passwordEncoder.encode(doctorDto.getPassword()));
            doctor.setFirstName(doctorDto.getFirstName());
            doctor.setSecondName(doctorDto.getSecondName());
            doctor.setLastName(doctorDto.getLastName());
            doctor.setSpecialization(doctorDto.getSpecialization());
            Optional<TypeAppointment> optionalTypeAppointment = typeAppointmentRepository.findTypeAppointmentByName(doctorDto.getTypeAppointment());
            if (optionalTypeAppointment.isPresent()) {
                doctor.setTypeAppointment(optionalTypeAppointment.get());
            }

            Doctor save = doctorRepository.save(doctor);
            return doctorToDoctorDtoConvertor.convert(save);
        }
        return doctorDto;
    }

    @Override
    public List<ClientDto> getAllClients() {
        return clientRepository.findAll()
                .stream()
                .map(clientToClientDtoConvertor::convert)
                .toList();

    }

    @Override
    public List<ClientDto> setDescriptionClient(DescriptionClientDto descriptionClientDto) {
        Optional<Client> optionalClient = clientRepository.findById(descriptionClientDto.getId());
        if(optionalClient.isPresent()){
            Client client = optionalClient.get();
            client.setDescription(descriptionClientDto.getDescription());
            client.setHeight(descriptionClientDto.getHeight());
            client.setWeight(descriptionClientDto.getWeight());
            clientRepository.save(client);
        }
        return clientRepository.findAll()
                .stream()
                .map(clientToClientDtoConvertor::convert)
                .toList();
    }


}
