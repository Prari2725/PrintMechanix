package com.dto;

import lombok.Data;

@Data
public class JwtAuthResponse {
	private String token;
    private String email;
    private String name;
    public JwtAuthResponse(String token, String email, String name) {
        this.token = token;
        this.email = email;
        this.name = name;
    }

}
