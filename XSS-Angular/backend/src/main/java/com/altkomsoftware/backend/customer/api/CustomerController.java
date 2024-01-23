package com.altkomsoftware.backend.customer.api;

import com.altkomsoftware.backend.customer.service.CustomerService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*")
class CustomerController {

    private final CustomerService customerService;

    CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<CustomerDto> customers() {
        return customerService.getAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> customer(@PathVariable("id") String id) {
        try {
            customerService.delete(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR T(com.altkomsoftware.backend.user.security.PermissionEvaluator).hasPermissionToOwnResource(#username)")
    @GetMapping("/{username}")
    public CustomerDto getCustomer(@PathVariable String username) {
        return customerService.findByUsername(username);
    }

    @PreAuthorize("hasRole('ADMIN') OR T(com.altkomsoftware.backend.user.security.PermissionEvaluator).hasPermissionToOwnResource(#username)")
    @PutMapping("/{username}")
    public void update(@PathVariable String username, @RequestBody CustomerDto customerDto) {
        customerService.update(username, customerDto);
    }
}
