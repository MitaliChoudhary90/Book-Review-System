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

📬 Example API Requests (with Postman)

Base URL: http://localhost:5001/api     or      http://127.0.0.1:5001/api


User Signup

Method: POST

URL: /signup

Body (JSON):
{
"username": "john_doe",
"password": "securePassword123"
}



User Login

Method: POST

URL: /login

Body (JSON):
{
"username": "john_doe",
"password": "securePassword123"
}

Response:
{
"token": "your-jwt-token-here"
}




Add a Book

Method: POST

URL: /books

Headers:
Authorization: Bearer your-jwt-token
Content-Type: application/json

Body (JSON):
{
"title": "The Alchemist",
"author": "Paulo Coelho",
"genre": "Fiction"
}




Get All Books (with optional filters)

Method: GET

URL: /books?page=1&limit=5&author=Paulo Coelho&genre=Fiction




Get Book Details

Method: GET

URL: /books/BOOK_ID



Search Books by Title or Author

Method: GET

URL: /books/search?q=alchemist



Submit a Review

Method: POST

URL: /books/BOOK_ID/reviews

Headers:
Authorization: Bearer your-jwt-token
Content-Type: application/json

Body (JSON):
{
"rating": 5,
"comment": "Inspiring and thought-provoking!"
}



Update a Review

Method: PUT

URL: /reviews/REVIEW_ID

Headers:
Authorization: Bearer your-jwt-token
Content-Type: application/json

Body (JSON):
{
"rating": 4,
"comment": "Still great, but not perfect."
}



Delete a Review

Method: DELETE

URL: /reviews/REVIEW_ID

Headers:
Authorization: Bearer your-jwt-token



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
