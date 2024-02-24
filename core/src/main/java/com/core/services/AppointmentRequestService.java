package com.core.services;

import com.core.dto.AppointmentRequestDTO;

import java.util.List;

public interface AppointmentRequestService {
    void createAppointmentRequest(AppointmentRequestDTO appointmentRequestDTO);

    List<AppointmentRequestDTO> getAll();
}
