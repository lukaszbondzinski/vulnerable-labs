package com.altkomsoftware.backend.user.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

public class PermissionEvaluator {

    public static boolean hasPermissionToOwnResource(String username) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String currentUsername = userDetails.getUsername();
        return currentUsername.equals(username);
    }
}
