package com.example.hufamilys.dto;

import com.example.hufamilys.entity.Member;
import com.example.hufamilys.entity.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeRequest {

    private String name;

    private String Ingredients;

    private String text;

    private Long like;

    private Long dislike;

    private Long used;

}