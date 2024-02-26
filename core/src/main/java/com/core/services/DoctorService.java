package com.core.services;

import com.core.dto.DoctorDto;

import java.util.List;

public interface DoctorService {
    DoctorDto addDoctor(DoctorDto doctorDto);

    List<DoctorDto> getDoctorsByAppointments(Integer appointmentId);

    List<DoctorDto> getAll();

    DoctorDto changeDoctor(DoctorDto doctorDto);
}
