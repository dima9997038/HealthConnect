package com.client.controllers;


import com.client.sevices.impl.ClientServiceImpl;
import com.core.dtos.ClientDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/v1/client")
@RequiredArgsConstructor
@Slf4j
public class RegistrationController {
private  final ClientServiceImpl clientService;

    @PostMapping("/registration")
    public ResponseEntity<ClientDto> clientRegistration(@RequestBody ClientDto clientDto){
        ClientDto registration = clientService.registration(clientDto);
        log.info("Have been registered client with login "+ registration.getLogin());
        return ResponseEntity.ok(registration);
    }

}
