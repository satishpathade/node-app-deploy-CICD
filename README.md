# Node.js Application CI/CD Pipeline using Jenkins and AWS EC2

This repository contains a complete CI/CD pipeline that automates the process of deploying a Node.js application using Jenkins, SSH, and PM2 on an AWS EC2 instance. The pipeline runs automatically on every code push through a GitHub Webhook, providing a smooth, repeatable and fully automated deployment workflow.

---

## What This Pipeline Does

1. GitHub Webhook detects a push and triggers Jenkins automatically  
2. Jenkins pulls the latest code  
3. Installs Node.js dependencies using `npm install`  
4. Copies updated project files to the EC2 server using SCP  
5. PM2 restarts the application with the new code  
6. The updated Node.js app becomes live instantly without manual steps

## Architecture

**push → GitHub Webhook → Jenkins → EC2 (Ubuntu) → PM2 → node-app**

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Language** | Node.js |
| **Package Manager** | NPM |
| **Process Manager** | PM2 |
| **CI/CD** | Jenkins, GitHub Webhook |
| **Source Control** | Git & GitHub |
| **Deployment** | SSH, SCP |
| **Server** | AWS EC2 (Ubuntu) |
| **Automation** | Jenkins Declarative Pipeline |

---

### Project Structure 
```
├── app.js
├── jenkinsfile
├── package.json
├── README.md
└── img/
``` 
---

## Jenkinsfile (Full Pipeline)
**[jenkinsfile](jenkinsfile)**
This file contains the complete pipeline used for building and deploying the node.js application.

---

## Requirements
### On EC2 (Ubuntu)
Install Node.js, npm and PM2:

```bash
sudo apt update
sudo apt install nodejs -y
sudo apt install npm -y
sudo npm install -g pm2
```
---

## Author
**Satish Pathade**  
AWS Cloud & DevOps Engineer 

- GitHub: https://github.com/satishpathade  
- LinkedIn: https://www.linkedin.com/in/satish-pathade  
- Email: pathadesatish0@gmail.com
