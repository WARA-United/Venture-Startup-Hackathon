package com.example.contest.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContestDTO {
    Long contestId;
    String compEmail;
    String category;
    String title;
    String content;
    String image;
    String startDate;
    String endDate;
}
