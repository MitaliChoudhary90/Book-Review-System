# 📚 Book Review API

A simple and modular RESTful API built with Node.js, Express, and MongoDB for managing books and user reviews. Includes authentication using JWT, filtering, search, and pagination support.

🚀 Features
User Signup & Login with JWT authentication

Create, retrieve, update, and delete book reviews

One review per user per book enforced

Pagination & filtering (by author, genre)

Full-text search on title and author (case-insensitive, partial match)

Modular project structure and clean RESTful design

🛠 Tech Stack
Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens)

dotenv

bcrypt

📦 Installation

#Clone the repository:
git clone https://github.com/<your-username>/book-review-api.git
cd book-review-api

#Install dependencies:
npm install

#Create a .env file in the root with the following variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

#Start the server:
npm run dev   -for development (nodemon)
# or
npm start     - for production


🧪 API Endpoints
All endpoints prefixed with /api

👤 Auth
POST /api/signup – Register new user

POST /api/login – Login and receive JWT token

📚 Books
POST /api/books – Create new book (Auth required)

GET /api/books – Get all books (pagination, filter by author & genre)

GET /api/books/:id – Get book details (with average rating & reviews)

GET /api/books/search?q=keyword – Search by title/author

📝 Reviews
POST /api/books/:id/reviews – Submit review (Auth required, one per user per book)

PUT /api/reviews/:id – Update your review

DELETE /api/reviews/:id – Delete your review

🔐 Auth Example

#Use JWT token in headers:
Authorization: Bearer your_token_here

🧪 Sample API Requests

📌 POST /api/signup
{
  "username": "john_doe",
  "password": "securepass123"
}

📌 POST /api/books/:id/reviews
Headers:
Authorization: Bearer YOUR_JWT_TOKEN
{
  "rating": 4,
  "comment": "Amazing book!"
}

📌 GET /api/books/search?q=harry
Returns all books matching "harry" in title or author.


📁 Project Structure
pgsql
Copy
Edit
book-review-api/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── .env
├── .gitignore
├── server.js
├── README.md
└── package.json


📌 Assumptions
Each user can only review a book once

Reviews are tied to authenticated users

Ratings are averaged per book using all existing reviews

Basic validation is performed on inputs


📬 Author
Created by Mitali Choudhary
