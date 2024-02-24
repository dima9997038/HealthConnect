package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppointmentRequestDTO {
    private String phone;
    private String fullName;
    private Long doctorId;
    private String message;
}
