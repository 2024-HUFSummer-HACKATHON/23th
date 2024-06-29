package com.example.hufamilys.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignRequest {

    private String email;

    private String password;

    private String name;

    private String nickname;

}