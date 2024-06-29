package com.example.hufamilys.service;

import com.example.hufamilys.entity.Participate;
import com.example.hufamilys.repository.ParticipateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ParticipateService {

    private final ParticipateRepository participateRepository;

    public Boolean participate(Long postid, Long memberid) {
        participateRepository.save(Participate.builder()
                .postid(postid)
                .memberid(memberid)
                .build());
        return true;
    }

}