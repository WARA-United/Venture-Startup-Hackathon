package com.example.contest.Service;

import com.example.contest.DTO.ContestDTO;
import com.example.contest.Entity.Contest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

public interface ContestService {
    public void createContest(ContestDTO contestDTO, MultipartFile imageFile);
    public List<ContestDTO> getAll();
    public List<ContestDTO> getByCategory(String category);
}
