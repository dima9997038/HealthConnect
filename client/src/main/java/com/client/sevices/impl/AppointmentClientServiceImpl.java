package com.client.sevices.impl;

import com.client.dtos.AppointmentClientDto;
import com.client.sevices.AppointmentClientService;
import com.client.transformers.OrderToAppointmentByDoctorDto;
import com.core.dto.AppointmentByDoctorDto;
import com.core.models.Client;
import com.core.models.Order;
import com.core.repositories.ClientRepository;
import com.core.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentClientServiceImpl implements AppointmentClientService {
    private final OrderRepository orderRepository;
    private final OrderToAppointmentByDoctorDto orderToAppointmentByDoctorDto;
    private final ClientRepository clientRepository;

    @Override
    public List<AppointmentByDoctorDto> getAppointmentDoctorList(Long id) {
        List<Order> orders = orderRepository.findAll();
        return   orders.stream()
                .filter(order -> order.getDoctor().getId().equals(id))
                .filter(order -> order.getClient()==null)
                .map(orderToAppointmentByDoctorDto::transform)
                .toList();
    }

    @Override
    public void addAppointment(AppointmentClientDto appointment) {
        Client client = clientRepository.findClientByLogin(appointment.getClient());
        List<Order> orders = orderRepository.findAllByDoctorId(appointment.getDoctorId());
        Optional<Order> first = orders.stream().filter(order -> order.getAppointmentDate().compareTo(appointment.getData()) == 0).findFirst();
        if(first.isPresent()){
            Order order=first.get();
            order.setClient(client);
            orderRepository.save(order);
        }

    }
}
