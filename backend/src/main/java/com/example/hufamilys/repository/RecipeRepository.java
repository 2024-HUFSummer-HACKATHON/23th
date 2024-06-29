package com.example.hufamilys.repository;

import com.example.hufamilys.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Transactional
public interface RecipeRepository extends JpaRepository<Recipe, Long> {



}