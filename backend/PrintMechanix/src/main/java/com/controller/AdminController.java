package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;

import com.service.UserService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("http://localhost:3000")
public class AdminController {
	
	@Autowired
    private UserService userService;
	
	
	/**
	 * Retrieves a list of all registered users.
	 * Accessible only to users with the ADMIN role.
	 *
	 * @return ResponseEntity containing the list of users and HTTP 200 OK status
	 */
	
	@GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
	 public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
        
	
	/**
	 * Deletes a user by their ID.
	 * Accessible typically to admin users or based on security configuration.
	 *
	 * @param userId the ID of the user to delete
	 * @return ResponseEntity with a success message if the user is deleted,
	 *         or an error message if deletion fails
	 */
	
	
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        try {
            userService.deleteUser(userId);
            Map<String, String> response = new HashMap<>();
            response.put("message", "User deleted successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
	
	

}
