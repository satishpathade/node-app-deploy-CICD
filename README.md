# 🚀 Node.js CI/CD Deployment Using Jenkinsfile, AWS EC2

This project shows how to deploy a Node.js application using a Jenkins Declarative Pipeline.  
Each GitHub push triggers an automated build, uploads the updated files to an EC2 server, and restarts the app with PM2.

---

## Architecture

**GitHub → Jenkins → EC2 (Ubuntu) → PM2 → node-app**

---

## Jenkinsfile

 Below is the Jenkinsfile used in this project:
**[jenkinsfile](jenkinsfile)**

---

## What the Jenkinsfile Automates

### How the CI/CD flow works:

1. Developer pushes code to GitHub  
2. GitHub triggers a webhook  
3. Jenkins pulls the latest code  
4. Jenkins installs dependencies  
5. Jenkins uploads files to EC2  
6. EC2 restarts `node-app` using PM2  
7. The app goes live instantly  

Jenkins handles the entire deployment process. No manual steps are required on the jenkins server.

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
### Project Structure 
```
├── app.js
├── jenkinsfile
├── package.json
├── README.md
└── img/
```

## Tech Stack
| Tool | Purpose |
|------|---------|
| **Node.js** | Application runtime |
| **Jenkins** | CI/CD pipeline |
| **AWS EC2 (Ubuntu)** | Deployment server |
| **PM2** | Node.js process manager |
| **GitHub** | Source code hosting and version control |
| **GitHub Webhooks** | Auto-trigger Jenkins on push |

