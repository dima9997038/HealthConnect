package com.core.services;

import com.core.dto.AppointmentDto;
import com.core.dto.AppointmentRequestDTO;
import com.core.dto.OrderDescriptionDto;

import java.util.List;

public interface AppointmentRequestService {
    void createAppointmentRequest(AppointmentRequestDTO appointmentRequestDTO);

    List<AppointmentRequestDTO> getAll();

    List<AppointmentDto> getDoctorAppointments(String username);

    void setDescription(OrderDescriptionDto orderDescriptionDto);
}
