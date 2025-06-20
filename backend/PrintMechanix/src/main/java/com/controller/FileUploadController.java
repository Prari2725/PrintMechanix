package com.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.entity.UploadedFile;
import com.entity.User;
import com.repository.UploadedFileRepository;
import com.repository.UserRepository;
import com.util.AuthUtils;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileUploadController {

    private final UploadedFileRepository fileRepository;
    private final UserRepository userRepository;
    private final AuthUtils authUtils;

    private static final Set<String> ALLOWED_EXTENSIONS = Set.of(
            "stl", "obj", "wrl", "step", "stp", "iges", "igs", "3mf", "dxf", "dwg", "zip"
    );

    private final Path uploadDir = Paths.get("uploads");

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestParam("files") MultipartFile[] files) {
        List<UploadedFile> savedFiles = new ArrayList<>();
        User currentUser = authUtils.getCurrentUser();

        try {
            Files.createDirectories(uploadDir);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create upload directory.");
        }

        for (MultipartFile file : files) {
            String extension = Optional.ofNullable(file.getOriginalFilename())
                    .filter(f -> f.contains("."))
                    .map(f -> f.substring(f.lastIndexOf('.') + 1).toLowerCase())
                    .orElse("");

            if (!ALLOWED_EXTENSIONS.contains(extension)) {
                return ResponseEntity.badRequest().body("File type not allowed: " + file.getOriginalFilename());
            }

            try {
                String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
                Path filePath = uploadDir.resolve(fileName);
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                UploadedFile uploadedFile = new UploadedFile();
                uploadedFile.setFileName(file.getOriginalFilename());
                uploadedFile.setFileType(file.getContentType());
                uploadedFile.setFileSize(file.getSize());
                uploadedFile.setFilePath(filePath.toString());
                uploadedFile.setUser(currentUser);

                fileRepository.save(uploadedFile);
                savedFiles.add(uploadedFile);

            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Failed to upload: " + file.getOriginalFilename());
            }
        }

        return ResponseEntity.ok(savedFiles);
    }


    @GetMapping("/getfiles")
    public ResponseEntity<List<UploadedFile>> getAllUploadedFiles() {
        return ResponseEntity.ok(fileRepository.findAll());
    }
    @GetMapping("/my-files")
    public ResponseEntity<List<UploadedFile>> getFilesForCurrentUser() {
        User currentUser = authUtils.getCurrentUser();
        List<UploadedFile> userFiles = fileRepository.findByUserId(currentUser.getId());
        return ResponseEntity.ok(userFiles);
    }

    
}
