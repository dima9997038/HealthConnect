package com.core.controllers;

import com.core.dto.AppointmentDto;
import com.core.dto.ClientDto;
import com.core.dto.OrderDescriptionDto;
import com.core.dto.DescriptionClientDto;
import com.core.services.AppointmentRequestService;
import com.core.services.impl.DoctorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/doctors")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3006","http://localhost:3000"})
public class DoctorClinicController {
    private final AppointmentRequestService appointmentRequestService;
    private final DoctorServiceImpl doctorService;
    @GetMapping("/appointments")
    public List<AppointmentDto> getDoctorAppointments(Principal principal){
        String username = (String) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return appointmentRequestService.getDoctorAppointments(username);
    }
    @PostMapping("/setDescription")
    public List<AppointmentDto> setDescription(@RequestBody  OrderDescriptionDto orderDescriptionDto, Principal principal){
        appointmentRequestService. setDescription( orderDescriptionDto);
        String username = (String) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return appointmentRequestService.getDoctorAppointments(username);
    }

    @PostMapping("/setDescriptionClient")
    public List<ClientDto> setDescriptionClient(@RequestBody DescriptionClientDto descriptionClientDto){
        return doctorService.setDescriptionClient(descriptionClientDto);
    }
}
