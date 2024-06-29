package com.example.hufamilys.service;

import com.example.hufamilys.dto.PostRequest;
import com.example.hufamilys.entity.Participate;
import com.example.hufamilys.entity.Post;
import com.example.hufamilys.repository.ParticipateRepository;
import com.example.hufamilys.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final ParticipateRepository participateRepository;



    public Long countparticipate(){
        return participateRepository.count();
    }




    public Post PostSave(PostRequest postRequest) {

        Post post = Post.builder()
                .category(postRequest.getCategory())
                .title(postRequest.getTitle())
                .memberid(postRequest.getMemberid())
                .title(postRequest.getTitle())
                .link(postRequest.getLink())
                .maxPeople(postRequest.getMaxPeople())
                .endDate(postRequest.getEndDate())
                .price(postRequest.getPrice())
                .account(postRequest.getAccount())
                .build();

                postRepository.save(post);

                participateRepository.save(Participate.builder()
                .postid(post.getId())
                .memberid(post.getMemberid())
                .build());

        return post;
    }

    public List<Post> findByCategory(String category){
        return postRepository.findByCategory(category);
    }

}