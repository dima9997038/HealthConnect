package com.client.sevices;

import com.client.dtos.AppointmentClientDto;
import com.core.dto.AppointmentByDoctorDto;

import java.util.List;

public interface AppointmentClientService {
    List<AppointmentByDoctorDto> getAppointmentDoctorList(Long id);

    void addAppointment(AppointmentClientDto appointment);
}
