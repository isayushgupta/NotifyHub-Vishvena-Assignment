package com.notifyhub.notifyhub.controller;

import com.notifyhub.notifyhub.dto.SmsRequestDTO;
import com.notifyhub.notifyhub.model.SmsLog;
import com.notifyhub.notifyhub.service.SmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sms")
@CrossOrigin
public class SmsController {

    private final SmsService smsService;

    @PostMapping
    public ResponseEntity<String> sendSms(@RequestBody SmsRequestDTO dto) {
        smsService.saveSms(dto);
        return ResponseEntity.ok("SMS saved successfully");
    }

    @GetMapping
    public ResponseEntity<Page<SmsLog>> getSms(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable =
                PageRequest.of(page, size, Sort.by("sentAt").descending());

        return ResponseEntity.ok(smsService.getSms(pageable));
    }
}
