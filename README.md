# URL Shortener

A simple and efficient URL shortening web application that converts long URLs into short, easy-to-share links.

## Features

- Shorten long URLs with a single click
- Redirect users to the original URL via the shortened link
- User-friendly and responsive design
- Error handling for invalid URLs

## Tech Stack

- Frontend: React.js, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Axios for API requests

## Demo

https://url-shortner-frontend-a2zw.onrender.com/

---

## Project Structure

/backend # Node.js + Express backend
/frontend # React + Vite frontend

---

## Installation and Setup

### Backend Setup

1. Navigate to the backend folder  
  cd backend

2. Install dependencies
   npm install

3. Create a .env file in the backend folder with the following variables:
 MONGO_URI=''
 APP_URL=''
 JWT_SECRET=''

4. Start the backend server
   npm start

## Frontend Setup

1.Open a new terminal and navigate to the frontend folder:
cd frontend

2.Install dependencies:
npm install

3.Create a .env file in the frontend folder if needed (for example, to set the backend API URL):
VITE_API_URL='http://localhost:5000'  # or your backend server URL

4.Start the frontend development server:
npm run dev 
