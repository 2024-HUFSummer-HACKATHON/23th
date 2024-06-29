package com.example.hufamilys.dto;

import com.example.hufamilys.entity.Member;
import com.example.hufamilys.entity.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinRequest {

    private Post post;
    private Member member;

}