package com.core.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointment_requests")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String phone;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @ManyToOne
    private Doctor doctor;

    @Column(name = "message")
    private String message;

    @Column(name = "request_time")
    private LocalDateTime requestTime;
}
