package com.example.hufamilys.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipeid")
    private Long recipeid;

    @Column
    private String recipename;

    @Column
    private String recipeIngredients;

    @Column
    private String recipetext;

    @Column
    private Long recipelike;

    @Column
    private Long recipedislike;

    @Column
    private Long recipeused;

}
