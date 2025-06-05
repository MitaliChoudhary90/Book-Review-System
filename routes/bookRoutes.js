// book.routes.js
const express = require('express');
const { addBook, getBooks, getBookDetails, searchBooks } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addBook);
router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookDetails);

module.exports = router;
