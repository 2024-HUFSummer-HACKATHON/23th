package com.example.hufamilys.dto;

import com.example.hufamilys.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostRequest {

    private String category;

    private Long memberid;

    private String title;

    private String link;

    private Long maxPeople;

    private String endDate;

    private Long price;

    private String account;



}