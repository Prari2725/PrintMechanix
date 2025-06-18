package com.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="users")

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	  @Column(name = "first_name", nullable = false)
	    private String firstName;
	  
	  @Column(name = "last_name", nullable = false)
	    private String lastName;
 
	  @Column(name = "email",nullable = false, unique = true)
	    private String email;

	  @Column(name = "phone_number")
	    private String phoneNumber;
	  
	  @JsonIgnore
	    @Column(name = "password",nullable = false)
	    private String password;
	  
	  @Enumerated(EnumType.STRING)
	    @Column(name = "role",nullable = false)
	    private UserRole role = UserRole.USER;
	  
	  @Column(name = "created_at")
	    private LocalDateTime createdAt;

	    @Column(name = "updated_at")
	    private LocalDateTime updatedAt;
	    
	    @PrePersist
	    protected void onCreate() {
	        createdAt = LocalDateTime.now();
	        updatedAt = LocalDateTime.now();
	    }

	    @PreUpdate
	    protected void onUpdate() {
	        updatedAt = LocalDateTime.now();
	    }
	    
	    public boolean isAdmin() {
	        return role == UserRole.ADMIN;
	    }
}
