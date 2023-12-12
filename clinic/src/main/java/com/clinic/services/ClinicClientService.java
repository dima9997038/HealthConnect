package com.clinic.services;



import com.core.dtos.ClientDto;

import java.util.List;

public interface ClinicClientService {
    List<ClientDto> getAllClients();
}
