package com.example.hufamilys.service;

import com.example.hufamilys.dto.LoginRequest;
import com.example.hufamilys.dto.SignRequest;
import com.example.hufamilys.dto.SignResponse;
import com.example.hufamilys.entity.Authority;
import com.example.hufamilys.entity.Member;
import com.example.hufamilys.repository.MemberRepository;
import com.example.hufamilys.unit.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class SignService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;
    private final EmailService emailService;

    public SignResponse login(LoginRequest request) throws Exception {

        Member member = memberRepository.findByEmail(request.getEmail()).orElseThrow(() ->
                new BadCredentialsException("잘못된 계정정보입니다."));

        if (!passwordEncoder.matches(request.getPassword(), member.getPassword())) {
            throw new BadCredentialsException("잘못된 계정정보입니다.");
        }

        if(!member.getActivated()) {
            throw new BadCredentialsException("이메일 인증을 완료해주세요.");
        }

        return SignResponse.builder()
                .id(member.getId())
                .email(member.getEmail())
                .name(member.getName())
                .Activated(member.getActivated())
                .roles(member.getRoles())
                .token(jwtProvider.createToken(member.getEmail(), member.getRoles()))
                .build();
    }

    public boolean register(SignRequest request) throws Exception {
        try {
            Member member = Member.builder()
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .name(request.getName())
                    .nickname(request.getNickname())
                    .Activated(false)
                    .build();

            member.setRoles(Collections.singletonList(Authority.builder().name("ROLE_USER").build()));

            memberRepository.save(member);

            emailService.createMessage(member.getEmail());

        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new Exception("잘못된 요청입니다.");
        }
        return true;
    }

    public SignResponse getMember(String email) throws Exception {
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("계정을 찾을 수 없습니다."));

        if(!member.getActivated()) {
            throw new BadCredentialsException("이메일 인증을 완료해주세요.");
        }

        return new SignResponse(member);
    }


    public boolean update(SignRequest request, String email) throws Exception {
        try {
            Member member = memberRepository.findByEmail(email)
                    .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));

            member.setPassword(passwordEncoder.encode(request.getPassword()));
            member.setName(request.getName());
            memberRepository.save(member);
        } catch (Exception e) {
            throw new Exception("잘못된 요청입니다.");
        }
        return true;
    }

    public void updateActivated(String email) throws Exception {
        try {
            Member member = memberRepository.findByEmail(email)
                    .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));
            member.setActivated(true);
            memberRepository.save(member);
        } catch (Exception e) {
            throw new Exception("잘못된 요청입니다.");
        }
    }

    public Boolean sendNewPassword(String email) throws Exception {
        try {
            Member member = memberRepository.findByEmail(email)
                    .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));
            // 임시 랜덤 비밀번호 생성

            String code = UUID.randomUUID().toString().substring(0, 13);
            member.setPassword(passwordEncoder.encode(code));
            memberRepository.save(member);
            System.out.println("임시 비밀번호 : " + code);
            emailService.sendNewPassword(email, code);

        } catch (Exception e) {
            throw new Exception("잘못된 요청입니다.");
        }
        return true;

    }
}