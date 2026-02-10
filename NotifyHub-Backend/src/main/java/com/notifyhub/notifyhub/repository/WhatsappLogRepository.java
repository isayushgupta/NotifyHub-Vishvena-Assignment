package com.notifyhub.notifyhub.repository;

import com.notifyhub.notifyhub.model.WhatsappLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhatsappLogRepository extends JpaRepository<WhatsappLog, Long> {
}
