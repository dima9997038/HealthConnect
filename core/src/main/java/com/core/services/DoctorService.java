package com.core.services;

import com.core.dto.ClientDto;
import com.core.dto.DoctorDto;
import com.core.dto.DescriptionClientDto;

import java.util.List;

public interface DoctorService {
    DoctorDto addDoctor(DoctorDto doctorDto);

    List<DoctorDto> getDoctorsByAppointments(Integer appointmentId);

    List<DoctorDto> getAll();

    DoctorDto changeDoctor(DoctorDto doctorDto);

    List<ClientDto> getAllClients();

    List<ClientDto> setDescriptionClient(DescriptionClientDto descriptionClientDto);
}
