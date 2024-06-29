package com.example.hufamilys.service;

import com.example.hufamilys.dto.PostRequest;
import com.example.hufamilys.dto.RecipeRequest;
import com.example.hufamilys.entity.Participate;
import com.example.hufamilys.entity.Post;
import com.example.hufamilys.entity.Recipe;
import com.example.hufamilys.repository.ParticipateRepository;
import com.example.hufamilys.repository.PostRepository;
import com.example.hufamilys.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final PostRepository postRepository;

    public boolean RecipeSave(RecipeRequest recipeRequest) {
        Recipe recipe = Recipe.builder()
                .recipename(recipeRequest.getName())
                .recipetext(recipeRequest.getText())
                .recipedislike(0L)
                .recipelike(0L)
                .recipeIngredients(recipeRequest.getIngredients())
                .recipeused(0L)
                .build();

        recipeRepository.save(recipe);
        return true;
    }

    public List<Recipe> findAll() {
        return recipeRepository.findAll();
    }

    public Boolean like(Long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);

        Recipe recipe2 = recipe.get();

        recipe2.setRecipelike(recipe.get().getRecipelike() + 1);
        recipeRepository.save(recipe2);
        return true;
    }

    public Boolean dislike(Long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);

        Recipe recipe2 = recipe.get();

        recipe2.setRecipedislike(recipe.get().getRecipedislike() + 1);
        recipeRepository.save(recipe2);
        return true;
    }

    public Boolean used(Long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);

        Recipe recipe2 = recipe.get();

        recipe2.setRecipeused(recipe.get().getRecipeused() + 1);
        recipeRepository.save(recipe2);
        return true;
    }



}