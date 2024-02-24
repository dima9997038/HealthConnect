package com.core.controllers;

import com.core.dto.AppointmentRequestDTO;
import com.core.services.impl.AppointmentRequestServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/public/appointmentRequests")
@CrossOrigin(origins = {"http://localhost:3006", "http://localhost:3000"})
@RequiredArgsConstructor
public class AppointmentRequestController {
    private final AppointmentRequestServiceImpl appointmentRequestService;

    @PostMapping
    public void createAppointmentRequest(@RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        appointmentRequestService.createAppointmentRequest(appointmentRequestDTO);
    }
}
