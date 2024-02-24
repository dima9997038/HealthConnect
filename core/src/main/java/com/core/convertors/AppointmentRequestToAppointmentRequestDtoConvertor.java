package com.core.convertors;

import com.core.dto.AppointmentRequestDTO;
import com.core.models.AppointmentRequest;
import org.springframework.stereotype.Component;

@Component
public class AppointmentRequestToAppointmentRequestDtoConvertor extends Convertor<AppointmentRequest, AppointmentRequestDTO> {
    @Override
    public AppointmentRequestDTO convert(AppointmentRequest appointmentRequest) {
        AppointmentRequestDTO appointmentRequestDTO=new AppointmentRequestDTO();
        appointmentRequestDTO.setDoctorId(appointmentRequest.getDoctor().getId());
        appointmentRequestDTO.setDoctorName(appointmentRequest.getDoctor().getLastName());
        appointmentRequestDTO.setPhone(appointmentRequest.getPhone());
        appointmentRequestDTO.setMessage(appointmentRequest.getMessage());
        appointmentRequestDTO.setFullName(appointmentRequest.getFullName());
        return appointmentRequestDTO;
    }
}
