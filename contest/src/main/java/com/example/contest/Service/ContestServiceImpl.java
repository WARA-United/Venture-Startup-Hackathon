package com.example.contest.Service;

import com.example.contest.DTO.ContestDTO;
import com.example.contest.Entity.Contest;
import com.example.contest.Repository.ContestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ContestServiceImpl implements ContestService{
    private final ContestRepository contestRepository;
    private final CommunicationService communicationService;

    @Autowired
    public ContestServiceImpl(ContestRepository contestRepository,
                              CommunicationService communicationService) {
        this.contestRepository = contestRepository;
        this.communicationService = communicationService;
    }

    @Override
    public void createContest(ContestDTO contestDTO, MultipartFile imageFile) {
        String image;
        try {
            image = communicationService.imageUpload(imageFile);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        Contest contest = convertContest(contestDTO, image);
        contestRepository.save(contest);
    }

    @Override
    public List<ContestDTO> getAll() {
        List<Contest> contests = contestRepository.findAll();
        return convertContestDTOList(contests);
    }

    @Override
    public List<ContestDTO> getByCategory(String category){
        List<Contest> contests = contestRepository.findByCategory(category);
        return convertContestDTOList(contests);
    }

    public ContestDTO convertContestDTO(Contest contest){
        return ContestDTO.builder()
                .contestId(contest.getContestId())
                .compEmail(contest.getCompEmail())
                .category(contest.getCategory())
                .title(contest.getTitle())
                .content(contest.getContent())
                .image(contest.getImage())
                .startDate(contest.getStartDate())
                .endDate(contest.getEndDate())
                .build();
    }

    public List<ContestDTO> convertContestDTOList(List<Contest> contests){
        List<ContestDTO> contestDTOList = new ArrayList<>();
        for (Contest contest : contests) {
            contestDTOList.add(convertContestDTO(contest));
        }
        return contestDTOList;
    }

    public Contest convertContest(ContestDTO contestDTO, String image){
        return Contest.builder()
                .compEmail(contestDTO.getCompEmail())
                .category(contestDTO.getCategory())
                .title(contestDTO.getTitle())
                .content(contestDTO.getContent())
                .image(image)
                .startDate(contestDTO.getStartDate())
                .endDate(contestDTO.getEndDate())
                .build();
    }
}
