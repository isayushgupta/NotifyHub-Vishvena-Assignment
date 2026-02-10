package com.notifyhub.notifyhub.repository;

import com.notifyhub.notifyhub.model.SmsLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SmsLogRepository extends JpaRepository<SmsLog, Long>
{

}
