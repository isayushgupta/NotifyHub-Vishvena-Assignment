package com.notifyhub.notifyhub.controller;

import com.notifyhub.notifyhub.dto.EmailRequestDTO;
import com.notifyhub.notifyhub.model.EmailLog;
import com.notifyhub.notifyhub.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emails")
@RequiredArgsConstructor
@CrossOrigin
public class EmailController {

    private final EmailService emailService;

//    public EmailController(EmailService emailService) {
//        this.emailService = emailService;
//    }

    @PostMapping
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequestDTO dto) {
        emailService.saveEmail(dto);
        return ResponseEntity.ok("Email saved successfully");
    }

    @GetMapping
    public ResponseEntity<Page<EmailLog>> getEmails(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable =
                PageRequest.of(page, size, Sort.by("sentAt").descending());

        return ResponseEntity.ok(emailService.getEmails(pageable));
    }
}
