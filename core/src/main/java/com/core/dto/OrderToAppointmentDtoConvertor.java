package com.core.dto;

import com.core.convertors.Convertor;
import com.core.enums.TypeOrderStatus;
import com.core.models.Order;
import com.core.models.OrderStatus;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class OrderToAppointmentDtoConvertor extends Convertor<Order,AppointmentDto> {
    @Override
    public AppointmentDto convert(Order order) {
        AppointmentDto appointmentDto=new AppointmentDto();
        appointmentDto.setId(order.getId());
        if(order.getClient()!=null){
            appointmentDto.setClientId(order.getClient().getId());
            appointmentDto.setClientName(order.getClient().getLastName());
        }

        appointmentDto.setDoctorId(order.getDoctor().getId());
        appointmentDto.setDoctorName(order.getDoctor().getLastName());
        appointmentDto.setAppointmentDate(order.getAppointmentDate());
        List<OrderStatus> statuses = order.getStatuses();
        if(statuses.size()>0){
            String status = statuses.get(0).getTypeOrderStatus().name();
            appointmentDto.setStatus(status);
        }
        appointmentDto.setDescription(order.getDescription());
        return appointmentDto;
    }
}
