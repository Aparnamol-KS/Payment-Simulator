# Payment Simulator

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Web application that allows users to create accounts, manage balances, and transfer money efficiently. Fully responsive with a modern, user-friendly design.

## 🌟 Features

- **Sign Up & Sign In** : *Create an account or log in*
- **Dashboard** : *View current balance and list of users*
- **Search Users** : *Find users by name*
- **Send Money** : *Transfer money to other users*
- **Responsive Layout** : *Works on desktop and mobile screens*

## 🛠️Technologies Used
### Frontend
  + React (with Hooks & React Router)
  + Tailwind CSS for styling and responsive design
  + Axios for API calls
### Backend
  + Node.js with Express.js
  + MongoDB + Mongoose for data storage
  + Zod for schema validation
  + JWT-based authentication and middleware
  + dotenv for environment configuration


## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/paytm-clone.git
cd paytm-clone
```
### 2. Install dependencies
- Frontend
  ```
  cd frontend
  npm install
  ```
- Backend
   ```
  cd backend
  npm install
  ```
### 3. Setup environment variables
- Create a .env file in backend folder:
  ```
  MONGODB_URI = your_mongodb_connection_string
  JWT_SECRET= your_secret_key
  ```
### 4. Run the project
- Frontend
  ```
  cd frontend
  npm run dev
  ```
- Backend
   ```
  cd backend
  node index.js
  ```

## 📡 API Overview

- **User Authentication**  
  - `POST /api/v1/user/signup` — Register a new user  
  - `POST /api/v1/user/signin` — Authenticate and obtain JWT token  

- **User Management**  
  - `GET /api/v1/user/bulk` — Get all users or search users

- **Account Management**  
  - `GET /api/v1/account/balance` — Get the current user's balance  
  - `POST /api/v1/account/transfer` — Transfer money to another user  





