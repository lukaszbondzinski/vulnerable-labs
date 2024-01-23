package com.altkomsoftware.backend.user.service;

import com.altkomsoftware.backend.user.data.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class JwtService {

    private static final String JWT_SIGNING_KEY = "eb148c58-9e5f-11ee-8c90-0242ac120002";
    private static final long ACCESS_TOKEN_VALIDITY = 24 * 60 * 60 * 1000;

    public String createToken(User user) {
        Claims claims = Jwts.claims().setSubject(user.getLogin());
        claims.put("name", user.getName());
        claims.put("surname", user.getSurname());
        claims.put("id", user.getId());
        claims.put("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet()));
        LocalDateTime tokenCreateTime = LocalDateTime.now();
        LocalDateTime tokenValidity = tokenCreateTime.plus(ACCESS_TOKEN_VALIDITY, ChronoUnit.MILLIS);
        return Jwts.builder()
                .setClaims(claims)
                .setIssuer("AuthService")
                .setIssuedAt(new Date())
                .setExpiration(
                        Date.from(tokenValidity.toInstant(ZoneId.systemDefault().getRules().getOffset(Instant.now()))))
                .signWith(SignatureAlgorithm.HS256, JWT_SIGNING_KEY)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails user) {
        Optional<String> username = extractUsername(token);
        if (username.isEmpty()) {
            return false;
        }
        try {
            return username.get().equals(user.getUsername()) &&
                    Jwts.parser().setSigningKey(JWT_SIGNING_KEY).parseClaimsJws(token).getBody().getExpiration()
                            .after(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    public Optional<String> extractUsername(String token) {
        try {
            return Optional.of(Jwts.parser().setSigningKey(JWT_SIGNING_KEY).parseClaimsJws(token).getBody().getSubject());
        } catch (Exception e) {
            return Optional.empty();
        }
    }
}
