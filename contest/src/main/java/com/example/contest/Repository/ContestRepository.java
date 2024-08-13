package com.example.contest.Repository;

import com.example.contest.Entity.Contest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContestRepository extends JpaRepository<Contest, Long> {
    public List<Contest> findByCategory(String category);
}
