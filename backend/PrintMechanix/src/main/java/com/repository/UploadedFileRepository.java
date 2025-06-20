package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.UploadedFile;

public interface UploadedFileRepository  extends JpaRepository<UploadedFile, Long> {
	List<UploadedFile> findByUserId(Long userId);

}
