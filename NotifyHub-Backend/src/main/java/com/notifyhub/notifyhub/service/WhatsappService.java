package com.notifyhub.notifyhub.service;

import com.notifyhub.notifyhub.dto.WhatsappRequestDTO;
import com.notifyhub.notifyhub.model.WhatsappLog;
import com.notifyhub.notifyhub.repository.WhatsappLogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class WhatsappService {

    private final WhatsappLogRepository whatsappLogRepository;

    public WhatsappService(WhatsappLogRepository whatsappLogRepository) {
        this.whatsappLogRepository = whatsappLogRepository;
    }

    public void saveWhatsapp(WhatsappRequestDTO dto) {
        WhatsappLog log = new WhatsappLog();
        log.setMobileNumber(dto.getMobileNumber());
        log.setMessage(dto.getMessage());
        log.setSentAt(LocalDateTime.now());

        whatsappLogRepository.save(log);
    }

    public Page<WhatsappLog> getWhatsapp(Pageable pageable) {
        return whatsappLogRepository.findAll(pageable);
    }
}
