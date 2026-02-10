# NotifyHub – Communication Logging Dashboard

NotifyHub is a full-stack web application designed to centralize and track system-generated communications such as Emails, SMS, and WhatsApp messages.  
It provides a clean tab-based interface with paginated list views and form-based inputs to simulate message sending by storing logs in a database.

This project was developed as part of a full-stack internship technical assignment.

---

## Key Features

### Communication Logs
- Email Logs
- SMS Logs
- WhatsApp Logs

Each log type is displayed in its own tab with a structured list view.

---

### List Views
- Tab-based navigation for Email, SMS, and WhatsApp
- Column-wise structured tables
- Server-side pagination (10 records per page)
- Sorted by latest activity
- Empty-state handling when no data is present

---

### Forms
- Send Email
  - Email To
  - Subject
  - Message
- Send SMS
  - Mobile Number
  - Message
- Send WhatsApp
  - Mobile Number
  - Message

Form submissions store data in the database and reflect instantly in the respective list view.

---

## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database
- Lombok
- RESTful APIs

### Frontend
- React (Vite)
- JavaScript
- Component-based architecture
- Fetch-based API integration

---

## Architecture Overview

The project follows a clean layered architecture:

### Backend Layers
- Controller – REST endpoints
- Service – business logic
- Repository – database access
- DTO – request payload handling
- Entity – database models

### Frontend Structure
- Tabs for navigation
- Reusable table components
- Pagination component
- Separate forms for each communication type

---

## API Endpoints

### Email
- `POST /api/emails`
- `GET /api/emails?page=0&size=10`

### SMS
- `POST /api/sms`
- `GET /api/sms?page=0&size=10`

### WhatsApp
- `POST /api/whatsapp`
- `GET /api/whatsapp?page=0&size=10`

All list APIs support pagination and sorting.

---

## Database

- H2 in-memory database
- Automatic schema creation via JPA
- No external database dependency required
- H2 Console enabled for inspection

---

## Running the Project

### Backend
```bash
cd NotifyHub-Backend
./mvnw spring-boot:run
```
#### Backend runs on:
``` bash
http://localhost:8080
```
#### H2 DataBase Console:
``` bash
http://localhost:8080/h2-console
```
#### JDBC Url:
``` bash
jdbc:h2:mem:notifyhubdb
```

### Frontend

```bash
cd NotifyHub-Frontend
npm install
npm run dev
```

### Notes
- Actual sending of Email, SMS, or WhatsApp messages is intentionally not implemented as per assignment requirements.
- The application focuses on data persistence, API design, pagination, and frontend-backend integration.
- Designed as an internal dashboard-style tool emphasizing clarity and scalability.

### Author

**Ayush Gupta**  
B.Tech Computer Science Engineering

