package com.core.services.impl;

import com.core.convertors.AppointmentRequestToAppointmentRequestDtoConvertor;
import com.core.dto.AppointmentDto;
import com.core.dto.AppointmentRequestDTO;
import com.core.dto.OrderDescriptionDto;
import com.core.dto.OrderToAppointmentDtoConvertor;
import com.core.enums.TypeOrderStatus;
import com.core.models.*;
import com.core.repositories.AppointmentRequestRepository;
import com.core.repositories.DoctorRepository;
import com.core.repositories.OrderRepository;
import com.core.repositories.UserRepository;
import com.core.services.AppointmentRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentRequestServiceImpl implements AppointmentRequestService {
    private final AppointmentRequestRepository appointmentRequestRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRequestToAppointmentRequestDtoConvertor appointmentRequestToAppointmentRequestDtoConvertor;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final OrderToAppointmentDtoConvertor orderToAppointmentDtoConvertor;

    @Override
    public void createAppointmentRequest(AppointmentRequestDTO appointmentRequestDTO) {
        AppointmentRequest appointmentRequest=new AppointmentRequest();
        appointmentRequest.setPhone(appointmentRequestDTO.getPhone());
        appointmentRequest.setRequestTime(LocalDateTime.now());
        appointmentRequest.setMessage(appointmentRequestDTO.getMessage());
        appointmentRequest.setFullName(appointmentRequestDTO.getFullName());
        Doctor doctor = doctorRepository.findById(appointmentRequestDTO.getDoctorId()).orElse(null);
        appointmentRequest.setDoctor(doctor);
        appointmentRequestRepository.save(appointmentRequest);

    }

    @Override
    public List<AppointmentRequestDTO> getAll() {
        return appointmentRequestRepository.findAll()
                .stream()
                .map(appointmentRequestToAppointmentRequestDtoConvertor::convert)
                .toList();
    }

    @Override
    public List<AppointmentDto> getDoctorAppointments(String username) {
        User user = userRepository.findByLogin(username);
        Optional<Doctor> doctorOptional = doctorRepository.findById(user.getId());
        if (doctorOptional.isPresent()){
            Doctor doctor = doctorOptional.get();
            List<Order> allByDoctorId = orderRepository.findAllByDoctorId(doctor.getId());
            return allByDoctorId
                    .stream()
                    .map(orderToAppointmentDtoConvertor::convert)
                    .toList();
        }
        return null;
    }

    @Override
    public void setDescription(OrderDescriptionDto orderDescriptionDto) {
        Optional<Order> optionalOrder = orderRepository.findById(orderDescriptionDto.getOrderId());
        if (optionalOrder.isPresent()){
            Order order = optionalOrder.get();
            order.setDescription(orderDescriptionDto.getDescription());
            OrderStatus orderStatus = order.getStatuses().get(0);
            orderStatus.setTypeOrderStatus(TypeOrderStatus.DONE);
            orderRepository.save(order);
        }

    }
}
