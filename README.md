# 🚀 B2B E-Commerce Product API

An API for a B2B E-Commerce platform, built as a challenge for the **XP Educação Bootcamp**.

---

## 📝 Table of Contents

- [📌 About The Project](#-about-the-project)
- [🧱 Tech Stack](#-tech-stack)
- [⚙️ Getting Started](#️-getting-started)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Installation & Running](#2-installation--running)
  - [3. Accessing the Application](#3-accessing-the-application)
  - [4. Stopping the Environment](#4-stopping-the-environment)
- [📚 API Documentation](#-api-documentation)

---

## 📌 About The Project

This project is a fully containerized RESTful API for a B2B E-Commerce system. It's built with ExpressJS and Typescript, using TSOA for automated route and documentation generation, and a PostgreSQL database.

## 🧱 Tech Stack

- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Framework:** [ExpressJS](https://expressjs.com/)
- **API & Routing:** [TSOA](https://tsoa-community.github.io/docs/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Prerequisites

Make sure you have the following tools installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

Verify your installation by running:

```bash
docker --version
docker compose version
```

### 2. Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rafag0n/xped-productapi.git](https://github.com/rafag0n/xped-productapi.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd xped-productapi
    ```

3.  **Build and start the services:**
    For the first time, or after changes to the `Dockerfile`, use the `--build` flag:
    ```bash
    docker compose up --build
    ```
    
    To simply start the application:
    ```bash
    docker compose up
    ```

    That’s it! 🎉 The entire environment will be built and started.

* **To run in detached mode (in the background):**
    ```bash
    docker compose up -d
    ```

* **To view the logs (if running in detached mode):**
    ```bash
    docker compose logs -f
    ```

### 3. Accessing the Application

Once the containers are up and running, you can access the following:

- **Application API:** `http://localhost:3000`
- **API Documentation (Swagger UI):** `http://localhost:3000/docs`
- **Database (External Port):** `localhost:5555` (Use this for connecting a database client like pgAdmin)

*(Note: Ports are defined in `docker-compose.yml` and can be changed there.)*

### 4. Stopping the Environment

-   **To stop all containers:**
    ```bash
    docker compose down
    ```

-   **To stop containers AND remove data volumes (deletes all database data):**
    ```bash
    docker compose down -v
    ```

---

## 📚 API Documentation

This project uses **TSOA** to automatically generate an OpenAPI (Swagger) specification from the Typescript code.

You can explore all available endpoints and test them directly via the Swagger UI:

**[http://localhost:3000/docs](http://localhost:3000/docs)**