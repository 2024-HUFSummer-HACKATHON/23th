package com.example.hufamilys.repository;

import com.example.hufamilys.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public interface PostRepository extends JpaRepository<Post, Long> {

//    List<Post> findByCategory(String category);
        @Query("SELECT p FROM Post p WHERE p.category = :category")
        List<Post> findByCategory(String category);

}