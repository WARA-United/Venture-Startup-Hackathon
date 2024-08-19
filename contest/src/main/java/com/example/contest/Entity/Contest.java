package com.example.contest.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long contestId;
    String compEmail;
    String category;
    String title;
    String content;
    String image;
    String startDate;
    String endDate;
    @ElementCollection
    @CollectionTable(name = "volunteers", joinColumns = @JoinColumn(name = "volunteer_list_id"))
    @Column(name = "volunteer")
    List<String> volunteer = new ArrayList<>();

    public void applyVolunteer(String volunteer){
        if(!volunteer.contains(volunteer)){
            this.volunteer.add(volunteer);
        }
    }
}