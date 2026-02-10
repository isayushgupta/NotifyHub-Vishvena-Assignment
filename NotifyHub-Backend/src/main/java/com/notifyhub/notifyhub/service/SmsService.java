package com.notifyhub.notifyhub.service;

import com.notifyhub.notifyhub.dto.SmsRequestDTO;
import com.notifyhub.notifyhub.model.SmsLog;
import com.notifyhub.notifyhub.repository.SmsLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SmsService {

    private final SmsLogRepository smsLogRepository;

    public void saveSms(SmsRequestDTO dto) {
        SmsLog smsLog = new SmsLog();
        smsLog.setMobileNumber(dto.getMobileNumber());
        smsLog.setMessage(dto.getMessage());
        smsLog.setSentAt(LocalDateTime.now());

        smsLogRepository.save(smsLog);
    }

    public Page<SmsLog> getSms(Pageable pageable) {
        return smsLogRepository.findAll(pageable);
    }
}
