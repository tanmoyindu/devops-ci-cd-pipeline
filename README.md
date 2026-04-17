#  DevOps CI/CD Pipeline Project

##  Overview

This project demonstrates a complete CI/CD pipeline for a containerized Node.js application using GitHub Actions and Docker.

The pipeline automatically builds, tests, containerizes, and pushes the application to Docker Hub whenever code is pushed to the main branch.

---

## Tech Stack

* **Backend:** Node.js 
* **CI/CD:** GitHub Actions
* **Containerization:** Docker
* **Registry:** Docker Hub
* **Version Control:** Git & GitHub

---

##  CI/CD Pipeline Workflow

The pipeline is triggered on every push to the `main` branch.

### Steps:

1. **Checkout Code**
2. **Install Dependencies**
3. **Start Application**
4. **Run Tests**
5. **Build Docker Image**
6. **Push Image to Docker Hub**

---

##  Docker Image

The application is automatically built and pushed to Docker Hub:

```bash
docker pull <tanmoyin>/devops-app:latest
```

Run the container locally:

```bash
docker run -p 3000:3000 <tanmoyin>/devops-app
```

---

##  Testing

A simple health check test is included:

```bash
node test.js
```

The CI pipeline ensures the app is running correctly before building the Docker image.

---

##  Project Structure

```
.
├── .github/workflows/ci.yml
├── app.js
├── test.js
├── package.json
├── Dockerfile
└── README.md
```

---

##  How to Run Locally

```bash
npm install
node app.js
```

Open in browser:

```
http://localhost:3000
```

---

##  CI/CD Architecture

```
Developer → GitHub → GitHub Actions → Docker Hub
```

---

##  Key Features

* Automated CI/CD pipeline
* Dockerized application
* Automated testing before deployment
* Integration with Docker Hub
* Infrastructure-ready workflow

---

##  Future Improvements

* Deploy to cloud (AWS / Kubernetes)
* Add monitoring (Prometheus + Grafana)
* Improve test coverage
* Add multi-stage Docker builds

---

