package com.notifyhub.notifyhub.controller;

import com.notifyhub.notifyhub.dto.WhatsappRequestDTO;
import com.notifyhub.notifyhub.model.WhatsappLog;
import com.notifyhub.notifyhub.service.WhatsappService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/whatsapp")
@RequiredArgsConstructor
@CrossOrigin
public class WhatsappController {

    private final WhatsappService whatsappService;

    @PostMapping
    public ResponseEntity<String> sendWhatsapp(@RequestBody WhatsappRequestDTO dto) {
        whatsappService.saveWhatsapp(dto);
        return ResponseEntity.ok("WhatsApp message saved successfully");
    }

    @GetMapping
    public ResponseEntity<Page<WhatsappLog>> getWhatsapp(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable =
                PageRequest.of(page, size, Sort.by("sentAt").descending());

        return ResponseEntity.ok(whatsappService.getWhatsapp(pageable));
    }
}
