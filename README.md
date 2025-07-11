# MERN Todo App

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js).

---
## 🔗 Live Demo

[View Live](https://todo-app-xi-ten-77.vercel.app/)

## Project Structure

```
todo_App/
├── todo_backend/   # Express.js + MongoDB backend
└── todo_frontend/  # React frontend
```

---

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local or cloud)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/praneethankam/todo_app.git
cd todo_App
```

---

### 2. Backend Setup (`todo_backend`)

```bash
cd todo_backend
npm install
```

- Create a `.env` file in `todo_backend` with your MongoDB URI:
  ```
  MONGODB_URI=mongodb://localhost:27017/todo_app
  PORT=5000
  ```

- Start the backend server:
  ```bash
  npm start
  ```
  The backend runs on [http://localhost:5000](http://localhost:5000).

---

### 3. Frontend Setup (`todo_frontend`)

```bash
cd ../todo_frontend
npm install
```

- Start the frontend development server:
  ```bash
  npm start
  ```
  The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Features

- Add, edit, delete, and mark todos as complete
- Persistent storage with MongoDB
- RESTful API with Express.js
- Modern React frontend

---

## Scripts

### Backend

- `npm start` — Start backend server
- `npm run dev` — Start backend with nodemon (if configured)

### Frontend

- `npm start` — Start React development server
- `npm run build` — Build frontend for production

---

## Environment Variables

- Backend: `.env` file for MongoDB URI and PORT
- Frontend: (if needed) `.env` for API endpoint configuration

---

## License

MIT

---

##
