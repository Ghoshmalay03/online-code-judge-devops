# 🚀 DevJudge – Online Code Judge System

DevJudge is a DevOps-oriented Online Code Judge System designed to provide a platform for submitting and executing programming code in a containerized environment. Built using Node.js, Express.js, Docker, and Jenkins, the project explores microservices architecture, containerization, and CI/CD automation.

## ✨ Key Features

- **Online Code Execution:** Accepts code submissions through a web interface and executes Python code using Docker containers.
- **Containerized Execution:** Uses Docker to provide an isolated environment for code execution.
- **Microservices Architecture:** Separates application functionality into independent User, Execution, and Result services.
- **User Management:** Includes basic user registration, login, and profile endpoints.
- **Execution Service:** Provides dedicated endpoints for code execution, compilation, and service health checks.
- **Result Management:** Includes submission storage, result retrieval, and submission history endpoints.
- **CI/CD Integration:** Uses Jenkins pipelines to demonstrate automated checkout, build, and deployment stages.
- **Frontend Integration:** Provides a simple web interface for submitting code and viewing execution output.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Backend | Node.js, Express.js |
| Frontend | HTML, JavaScript |
| Containerization | Docker |
| CI/CD | Jenkins |
| Architecture | Microservices |
| Version Control | Git, GitHub |
| Execution Environment | Python Docker Image |

## 🏗️ Project Architecture

The application is organized into three primary microservices:

1. **User Service:** Handles registration, login, and user profile operations.
2. **Execution Service:** Provides code execution and compilation endpoints.
3. **Result Service:** Handles submission records, result retrieval, and history endpoints.

The backend also provides a Docker-based code execution endpoint, while Jenkins is configured to demonstrate the CI/CD pipeline.

## 🎯 Project Objectives

- Understand and implement containerized application deployment.
- Explore microservices-based application architecture.
- Integrate Docker for isolated code execution.
- Implement CI/CD workflows using Jenkins.
- Develop practical experience with DevOps tools and automation.

## 🔮 Future Enhancements

- Support for multiple programming languages such as C++, Java, and Python.
- Secure sandboxing with CPU, memory, and execution-time limits.
- User authentication and database integration.
- Automated testing and deployment through Jenkins.
- Kubernetes-based orchestration and horizontal scaling.
- Monitoring and logging using Prometheus and Grafana.

---

**DevJudge – Bringing Coding, Containerization, and DevOps Automation Together.**