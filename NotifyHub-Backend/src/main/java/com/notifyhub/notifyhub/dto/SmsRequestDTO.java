package com.notifyhub.notifyhub.dto;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class SmsRequestDTO {
    private String mobileNumber;
    private String message;
}
