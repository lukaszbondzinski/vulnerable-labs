package com.altkomsoftware.backend.customer.api;

public record CustomerDto(String id, String name, String surname, String pesel, String serialNumber, AddressDto address, String documentsUrl) {
}
