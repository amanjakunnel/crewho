# Crewho - Collaborative Platform for Amateur Creators

**Crewho** is a fullstack networking app connecting amateur creators (musicians, writers, artists) for collaboration, feedback, and project sharing. Built with modern React frontend and Node/Express backend. Collaborative project—**my contributions**: frontend screens (routes/screens), backend models/API, monorepo merge. **Credits**: Team agreement [add names/usernames/emails].

## 🏗️ Architecture
crewho/
├── frontend/          # React/Next.js + Expo? (mobile-ready)
│   ├── app/          # App Router (Next.js 13+)
│   ├── routes/       # Page routes  
│   ├── screens/      # UI components
│   ├── shared/       # Shared utils/hooks
│   └── assets/       # Images/icons
└── backend/           # Node/Express REST API
    ├── api/          # Route handlers
    ├── config/       # DB, env config
    ├── models/       # Mongoose/SQL schemas
    └── server.js     # Express server

## ✨ Features
- Creator Profiles - Showcase portfolios, skills, availability
- Project Collaboration - Matchmaking, real-time chat, file sharing
- Feedback System - Structured reviews, skill ratings
- Networking Hub - Events, communities, discovery feed
- Responsive Design - Desktop + mobile (Expo/React Native ready)

## 🛠 Tech Stack
| Frontend        | Backend             | Tools           |
| --------------- | ------------------- | --------------- |
| React/Next.js   | Node/Express        | GitHub Actions  |
| TypeScript      | MongoDB/PostgreSQL? | Docker-ready    |
| Tailwind CSS    | JWT Auth            | Vercel/Netlify  |
| React Query/SWR | Mongoose/Prisma     | ESLint/Prettier |

## 🤝 Contributing
1. Fork → Clone → Branch (git checkout -b feature/creator-profile)
2. Commit → PR to main
3. Follow existing code style (frontend: camelCase, backend: snake_case)

## 🚀 Deployment
Frontend: npm run build → Vercel/Netlify
Backend: npm start → Render/Railway/Heroku
Monorepo: TurboRepo/Yarn Workspaces ready

API Docs: http://localhost:3001/api/docs

## 🚀 Quick Start

**Clone & Run Fullstack** (monorepo):
```bash
git clone https://github.com/amanjakunnel/crewho.git
cd crewho

# Terminal 1: Backend
cd backend && npm install && npm start
# Runs on http://localhost:3001

# Terminal 2: Frontend  
cd ../frontend && npm install && npm run dev
# Runs on http://localhost:3000
