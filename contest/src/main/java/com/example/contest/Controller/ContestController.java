package com.example.contest.Controller;

import com.example.contest.DTO.ContestDTO;
import com.example.contest.DTO.ContestRequestDTO;
import com.example.contest.DTO.VolunteerRequestDTO;
import com.example.contest.Service.ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/contest")
public class ContestController {
    private final ContestService contestService;

    @Autowired
    public ContestController(ContestService contestService) {
        this.contestService = contestService;
    }

    @PostMapping()
    public ResponseEntity<Void> createContest(@RequestPart("contest") ContestRequestDTO contestDTO,
                                                @RequestPart("image") MultipartFile image) {
        contestService.createContest(contestDTO, image);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/apply")
    public ResponseEntity<ContestDTO> applyContent(@RequestBody VolunteerRequestDTO volunteerRequestDTO) {
        ContestDTO contestDTO = contestService.applyContest(volunteerRequestDTO);
        return ResponseEntity.ok().body(contestDTO);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ContestDTO>> getAllContests() {
        List<ContestDTO> contestDTOList = contestService.getAll();
        return ResponseEntity.ok().body(contestDTOList);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<ContestDTO>> getByCategory(@PathVariable("category") String category) {
        List<ContestDTO> contestDTOList = contestService.getByCategory(category);
        return ResponseEntity.ok().body(contestDTOList);
    }

    @GetMapping("/volunteer/{volunteer}")
    public ResponseEntity<List<ContestDTO>> getByVolunteer(@PathVariable("volunteer") String volunteer) {
        List<ContestDTO> contestDTOList = contestService.getByVolunteer(volunteer);
        return ResponseEntity.ok().body(contestDTOList);
    }
}
