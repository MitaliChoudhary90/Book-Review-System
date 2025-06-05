// book.controller.js
const Book = require('../models/Book');
const Review = require('../models/Review');

exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const book = new Book({ title, author, genre, createdBy: req.user._id });
  await book.save();
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = author;
  if (genre) filter.genre = genre;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
};

exports.getBookDetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const reviews = await Review.find({ book: book._id })
    .populate('user', 'username')
    .limit(10);

  const avgRating = await Review.aggregate([
    { $match: { book: book._id } },
    { $group: { _id: null, avgRating: { $avg: "$rating" } } }
  ]);

  res.json({
    book,
    averageRating: avgRating[0]?.avgRating || 0,
    reviews,
  });
};

exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  const regex = new RegExp(q, "i");
  const books = await Book.find({
    $or: [{ title: regex }, { author: regex }]
  });
  res.json(books);
};
