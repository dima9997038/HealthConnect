package com.client.controllers;

import com.client.dtos.AppointmentClientDto;
import com.client.sevices.impl.AppointmentClientServiceImpl;
import com.core.dto.AppointmentByDoctorDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/client/appointment")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class AppointmentClientController {
    private final AppointmentClientServiceImpl appointmentClientService;

    @GetMapping("/byDoctor/{id}")
    public List<AppointmentByDoctorDto> getAppointmentByDoctor(@PathVariable Long id){
        return appointmentClientService.getAppointmentDoctorList(id);
    }
    @PostMapping
    public void setAppointment(@RequestBody AppointmentClientDto appointment){
        appointmentClientService.addAppointment(appointment);
    }
}