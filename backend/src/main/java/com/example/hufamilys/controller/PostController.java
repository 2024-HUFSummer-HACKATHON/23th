package com.example.hufamilys.controller;

import com.example.hufamilys.dto.*;
import com.example.hufamilys.entity.Member;
import com.example.hufamilys.entity.Post;
import com.example.hufamilys.entity.Recipe;
import com.example.hufamilys.repository.MemberRepository;
import com.example.hufamilys.service.ParticipateService;
import com.example.hufamilys.service.PostService;
import com.example.hufamilys.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정하는 방법
@RestController
@RequiredArgsConstructor
public class PostController {
    private final MemberRepository memberRepository;
    private final PostService postService;
    private final ParticipateService participateService;
    private final RecipeService recipeService;

    @Operation(summary = "게시글 저장")
    @PostMapping("/post")
    public ResponseEntity<Post> PostSave(@RequestBody PostRequest postRequest, Authentication username) {

        Member member = memberRepository.findByEmail(username.getName()).orElseThrow(
                () -> new UsernameNotFoundException("Invalid authentication!")
        );

        System.out.println("member : " + member.getId());

        postRequest.setMemberid(member.getId());

        return ResponseEntity.ok(postService.PostSave(postRequest));
    }


    @Operation(summary = "참가자 수", description = "참가자 수", tags = "PostController")
    @GetMapping("/countparticipate")
    public ResponseEntity<Long> countparticipate() {
        return ResponseEntity.ok(postService.countparticipate());
    }

    @Operation(summary = "참가", description = "참가", tags = "PostController")
    @PostMapping("/participate")
    public ResponseEntity<Boolean> Participate(@RequestBody ParticipateRequest participateRequest, Authentication username) {


        Member member = memberRepository.findByEmail(username.getName()).orElseThrow(
                () -> new UsernameNotFoundException("Invalid authentication!")
        );

        return ResponseEntity.ok(participateService.participate(participateRequest.getPostid(), member.getId()));
    }


    @Operation(summary = "카테고리별 게시글 조회", description = "카테고리별 게시글 조회", tags = "PostController")
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> findByCategory(@RequestParam String category) {
        return ResponseEntity.ok(postService.findByCategory(category));
    }

    @Operation(summary = "레시피 등록", description = "레시피 등록", tags = "RecipeController")
    @PostMapping("/recipe")
    public ResponseEntity<Boolean> RecipeSave(@RequestBody RecipeRequest recipeRequest) {

        return ResponseEntity.ok(recipeService.RecipeSave(recipeRequest));
    }

    @Operation(summary = "레시피 전체 조회", description = "레시피 전체 조회", tags = "RecipeController")
    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> findAllRecipe() {
        return ResponseEntity.ok(recipeService.findAll());
    }

    @Operation(summary = "레시피 좋아요", description = "레시피 좋아요", tags = "RecipeController")
    @PostMapping("/recipe/like")
    public ResponseEntity<Boolean> like(@RequestParam Long id) {
        return ResponseEntity.ok(recipeService.like(id));
    }

    @Operation(summary = "레시피 싫어요", description = "레시피 싫어요", tags = "RecipeController")
    @PostMapping("/recipe/dislike")
    public ResponseEntity<Boolean> dislike(@RequestParam Long id) {
        return ResponseEntity.ok(recipeService.dislike(id));
    }

    @Operation(summary = "레시피 사용", description = "레시피 사용", tags = "RecipeController")
    @PostMapping("/recipe/used")
    public ResponseEntity<Boolean> used(@RequestParam Long id) {
        return ResponseEntity.ok(recipeService.used(id));
    }


}