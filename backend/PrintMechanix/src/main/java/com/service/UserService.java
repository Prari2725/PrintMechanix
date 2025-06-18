package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dto.SignupRequest;
import com.entity.User;
import com.entity.UserRole;
import com.repository.UserRepository;

import jakarta.annotation.PostConstruct;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	/**
	 * Creates a new user account based on the provided signup request. This method
	 * is transactional to ensure atomicity in case of database errors.
	 *
	 * Validation: - Checks if the email is already registered. - If yes, throws a
	 * RuntimeException.
	 *
	 * User Details Mapping: - Extracts first and last names from the email (splits
	 * by space as a fallback). - Encodes the password before saving. - Sets the
	 * default role as USER.
	 *
	 * @param signupRequest the request object containing user registration details
	 * @return the newly created User entity
	 * @throws RuntimeException if the email is already in use
	 */
	@Transactional
	public User createUser(SignupRequest signupRequest) {
		if (userRepository.existsByEmail(signupRequest.getEmail())) {
			throw new RuntimeException("Username is already taken!");
		}

		if (signupRequest.getEmail() != null && userRepository.existsByEmail(signupRequest.getEmail())) {
			throw new RuntimeException("Email is already registered!");
		}

		User user = new User();
		// ✅ Extract firstName and lastName from email (before '@', split by dot)
	    String email = signupRequest.getEmail();
	    String[] parts = email.split("@")[0].split("\\.");

	    String firstName = parts.length > 0 ? parts[0] : "User";
	    String lastName = parts.length > 1 ? parts[1] : "Unknown";

	    user.setFirstName(firstName);
	    user.setLastName(lastName);

	    user.setEmail(signupRequest.getEmail());
	    user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
	    user.setPhoneNumber(signupRequest.getPhoneNumber());
	    user.setRole(UserRole.USER);

	    return userRepository.save(user);
	}

	/**
	 * Retrieves a user by their email address.
	 *
	 * This method queries the user repository for a user with the specified email.
	 * If no user is found, it throws a custom EmailNotFoundException.
	 *
	 * @param email the email address of the user to retrieve
	 * @return the User entity associated with the provided email
	 * @throws EmailNotFoundException if no user exists with the given email
	 */
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with Email: " + email));
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public void deleteUser(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

		if (user.isAdmin()) {
			throw new RuntimeException("Cannot delete admin user");
		}

		userRepository.delete(user);
	}

	@PostConstruct
	public void createAdminUser() {
		// Check if admin exists
		if (userRepository.findByEmail("admin@printmechanix.com").isEmpty()) {
			User adminUser = new User();
			adminUser.setPassword(passwordEncoder.encode("admin123")); // Change this password in production
			adminUser.setEmail("admin@printmechanix.com");
			adminUser.setFirstName("Admin");
			adminUser.setLastName("User");
			adminUser.setRole(UserRole.ADMIN);
			adminUser.setPhoneNumber("1234567890");
			userRepository.save(adminUser);
		}
	}
}