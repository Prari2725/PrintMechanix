package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.UploadedFile;

public interface UploadedFileRepository  extends JpaRepository<UploadedFile, Long> {
}