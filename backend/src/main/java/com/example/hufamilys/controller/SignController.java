package com.example.hufamilys.controller;

import com.example.hufamilys.dto.LoginRequest;
import com.example.hufamilys.dto.SignRequest;
import com.example.hufamilys.dto.SignResponse;
import com.example.hufamilys.service.EmailService;
import com.example.hufamilys.service.SignService;
import com.example.hufamilys.unit.OAuthService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정하는 방법
@RestController
@RequiredArgsConstructor
public class SignController {

    private final SignService memberService;
    private final OAuthService oAuthService;
    private final EmailService emailService;

    @Operation(operationId = "login", summary = "로그인", description = "요청을 검토한뒤 로그인", tags = "SignController")
    @PostMapping(value = "/login")
    public ResponseEntity<SignResponse> signin(@RequestBody LoginRequest request) throws Exception {
        return new ResponseEntity<>(memberService.login(request), HttpStatus.OK);
    }

    @Operation(operationId = "register", summary = "회원가입", description = "요청을 검토한뒤 회원가입", tags = "SignController")
    @PostMapping(value = "/register")
    public ResponseEntity<Boolean> signup(@RequestBody SignRequest request) throws Exception {
        return new ResponseEntity<>(memberService.register(request), HttpStatus.OK);
    }

    @Operation(operationId = "Authentication", summary = "내정보 보기", description = "요청을 검토한뒤 회원수정", tags = "SignController")
    @PostMapping("/Authentication")
    public ResponseEntity<SignResponse> Authentication(Authentication authentication) throws Exception {
        System.out.println(authentication.getName());
        return new ResponseEntity<>(memberService.getMember(authentication.getName()), HttpStatus.OK);
    }

    @Operation(operationId = "update", summary = "회원 정보 수정", description = "요청을 검토한뒤 회원 정보 수정", tags = "SignController")
    @PostMapping("/updateNick")
    public ResponseEntity<Boolean> updateNick(@RequestBody SignRequest request, Authentication authentication) throws Exception {
        System.out.println(authentication.getName());
        return new ResponseEntity<>(memberService.update(request, authentication.getName()), HttpStatus.OK);
    }


    @Operation(operationId = "새로운 비밀번호 이메일 전송", summary = "새로운 비밀번호 이메일 전송", description = "요청을 검토한뒤 새로운 비밀번호)", tags = "SignController")
    @PostMapping("/sendNewPassword")
    public ResponseEntity<Boolean> sendNewPassword(@RequestParam String email) throws Exception {
        return new ResponseEntity<>(memberService.sendNewPassword(email), HttpStatus.OK);
    }

    @Operation(operationId = "checkCertificationMail", summary = "이메일 인증번호 확인", description = "요청을 검토한뒤 이메일 인증번호 확인", tags = "EmailController")
    @GetMapping("/v1/email/certification/check")
    public RedirectView checkCertificationMail(@RequestParam String code, @RequestParam String email) {
        try {
            if (emailService.getData(code).equals(email)) {
                emailService.deleteData(code);

                memberService.updateActivated(email);

                RedirectView redirectView = new RedirectView();
                redirectView.setUrl("http://localhost/swagger-ui/index.html");

                return redirectView;
            } else {
                RedirectView redirectView = new RedirectView();
                redirectView.setUrl("http://localhost/swagger-ui/index.html");
                return redirectView;
            }
        } catch (Exception e) {
            RedirectView redirectView = new RedirectView();
            redirectView.setUrl("http://localhost/swagger-ui/index.html");
            return redirectView;
        }
    }

}
