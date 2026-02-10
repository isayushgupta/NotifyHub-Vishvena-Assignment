package com.notifyhub.notifyhub.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailRequestDTO {

//    Keep API input clean
//    Avoid exposing entity directly

    private String emailTo;
    private  String message;
    private  String subject;
}
