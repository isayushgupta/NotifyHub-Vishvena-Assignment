package com.notifyhub.notifyhub.service;

import com.notifyhub.notifyhub.dto.EmailRequestDTO;
import com.notifyhub.notifyhub.model.EmailLog;
import com.notifyhub.notifyhub.repository.EmailLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class EmailService
{

//    DTO → Entity mapping
//    Timestamp set at backend
//    Pagination supported via Pageable

    private final EmailLogRepository emailLogRepository;

    public void saveEmail(EmailRequestDTO dto) {
        EmailLog emailLog = new EmailLog();
        emailLog.setEmailTo(dto.getEmailTo());
        emailLog.setSubject(dto.getSubject());
        emailLog.setMessage(dto.getMessage());
        emailLog.setSentAt(LocalDateTime.now());

        emailLogRepository.save(emailLog);
    }

    public Page<EmailLog> getEmails(Pageable pageable)
    {
        return emailLogRepository.findAll(pageable);
    }
}
