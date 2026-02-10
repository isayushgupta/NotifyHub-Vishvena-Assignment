package com.notifyhub.notifyhub.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SmsRequestDTO {
    private String mobileNumber;
    private String message;
}
