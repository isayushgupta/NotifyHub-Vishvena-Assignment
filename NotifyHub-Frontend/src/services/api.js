const BASE_URL = "http://localhost:8080/api";

export const fetchEmails = async (page = 0, size = 10) => {
    const res = await fetch(
        `${BASE_URL}/emails?page=${page}&size=${size}`
    );
    return res.json();
};

export const saveEmail = async (data) => {
    const res = await fetch(`${BASE_URL}/emails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to save email");
    }
};

// SMS
export const fetchSms = async (page = 0, size = 10) => {
    const res = await fetch(
        `http://localhost:8080/api/sms?page=${page}&size=${size}`
    );
    return res.json();
};

export const saveSms = async (data) => {
    const res = await fetch("http://localhost:8080/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to save SMS");
    }
};

// WhatsApp
export const fetchWhatsapp = async (page = 0, size = 10) => {
    const res = await fetch(
        `http://localhost:8080/api/whatsapp?page=${page}&size=${size}`
    );
    return res.json();
};

export const saveWhatsapp = async (data) => {
    const res = await fetch("http://localhost:8080/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to save WhatsApp message");
    }
};
