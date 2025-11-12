# Fullstack App (React + Express) — AWS Deployment Ready

This repo contains a minimal full-stack example:
- `backend/` — Node.js + Express API (port 5000)
- `frontend/` — React app (build -> static files)

Use this to deploy backend to EC2 instances and frontend to S3/CloudFront or another EC2 + Nginx. The backend instances will be placed behind an AWS Application Load Balancer (ALB).

## Local quickstart

### Backend
```bash
cd backend
npm install
npm run start
# dev: npm run dev  (requires nodemon)
