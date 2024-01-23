package com.altkomsoftware.backend.customer.service;

import com.altkomsoftware.backend.customer.api.AddressDto;
import com.altkomsoftware.backend.customer.api.CustomerDto;
import com.altkomsoftware.backend.customer.data.Address;
import com.altkomsoftware.backend.customer.data.Customer;
import com.altkomsoftware.backend.customer.data.CustomerRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<CustomerDto> getAll() {
        return customerRepository.findAll().stream()
                .map(it -> new CustomerDto(it.getId(), it.getUser().getName(), it.getUser().getSurname(), it.getPesel(),
                        it.getSerialNumber(),
                        new AddressDto(it.getAddress().getId(), it.getAddress().getCountry(), it.getAddress().getCity(),
                                it.getAddress().getStreet(),
                                it.getAddress().getFlatNumber()), it.documentsUrl()))
                .toList();
    }

    public void delete(String customerId) {
        if (!customerRepository.existsById(customerId)) {
            throw new EntityNotFoundException("Customer does not exist with id " + customerId);
        }
        customerRepository.deleteById(customerId);
    }

    public CustomerDto findByUsername(String username) {
        return customerRepository.findCustomerByUserLogin(username)
                .map(it -> new CustomerDto(it.getId(), it.getUser().getName(), it.getUser().getSurname(), it.getPesel(), it.getSerialNumber(),
                        new AddressDto(it.getAddress().getId(), it.getAddress().getCountry(), it.getAddress().getCity(),
                                it.getAddress().getStreet(), it.getAddress().getFlatNumber()), it.documentsUrl())).orElseThrow();
    }

    @Transactional
    public void update(String username, CustomerDto customerDto) {
        Customer customer = customerRepository.findCustomerByUserLogin(username).orElseThrow();
        customer.setPesel(customerDto.pesel());
        customer.setSerialNumber(customerDto.serialNumber());
        customer.setDocumentsUrl(customerDto.documentsUrl());
        customer.setAddress(new Address(customerDto.address().country(), customerDto.address().city(), customerDto.address().street(), customerDto.address().flatNumber()));
    }
}
