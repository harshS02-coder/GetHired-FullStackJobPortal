GetHired-Job Portal Web Application

A full-stack job portal that enables recruiters to post jobs and job seekers to apply with resumes, built with a scalable, cloud-native architecture.

Features

-Role-based access for Recruiters & Job Seekers

Authentication

-Clerk for secure frontend authentication

-JWT-based authentication for backend-protected APIs

Resume & Logo Upload

-Cloudinary storage using stream-based uploads

-Supports PDFs (resumes) and images (company logos)

Job Management

-Create, update, delete, and view job listings

-Apply to jobs with resume upload

Error Tracking

-Integrated Sentry for real-time backend error monitoring

Optimized Backend

-Multer in-memory uploads (no disk I/O)

-Secure environment-based configuration

Tech Stack
Frontend

-React

-Tailwind CSS

-Clerk Authentication

-Backend

-Node.js

-Express.js

-MongoDB & Mongoose

-JWT & Bcrypt

-Cloudinary (file storage)

-Sentry (error tracking)

Deployment

-Frontend: Vercel

-Backend: Railway

Architecture Highlights

-Stateless backend with JWT authentication

-Decoupled frontend–backend architecture

-Cloudinary stream uploads for scalability

-Centralized error tracking with Sentry

-Secure handling of secrets using environment variables
