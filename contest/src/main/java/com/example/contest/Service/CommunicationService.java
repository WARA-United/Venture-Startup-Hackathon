package com.example.contest.Service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;

public interface CommunicationService {
    public String imageUpload(MultipartFile image) throws IOException;
}
