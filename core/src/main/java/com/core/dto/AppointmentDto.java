package com.core.dto;

import com.core.models.Doctor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppointmentDto {
    private Long id;
    private Long clientId;
    private String clientName;
    private Long doctorId;
    private String doctorName;
    private LocalDateTime appointmentDate;
    private String status;
    private String description;
}
