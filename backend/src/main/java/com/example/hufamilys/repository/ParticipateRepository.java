package com.example.hufamilys.repository;

import com.example.hufamilys.entity.Participate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ParticipateRepository extends JpaRepository<Participate, Long> {
    
}