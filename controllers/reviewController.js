// review.controller.js
const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { id: bookId } = req.params;

  const existing = await Review.findOne({ user: req.user._id, book: bookId });
  if (existing) return res.status(400).json({ message: "Review already exists" });

  const review = new Review({ rating, comment, user: req.user._id, book: bookId });
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  if (!review) return res.status(404).json({ message: "Review not found" });
  if (!review.user.equals(req.user._id)) return res.status(403).json({ message: "Not allowed" });

  review.rating = req.body.rating || review.rating;
  review.comment = req.body.comment || review.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  if (!review) return res.status(404).json({ message: "Review not found" });
  if (!review.user.equals(req.user._id)) return res.status(403).json({ message: "Not allowed" });

  await review.deleteOne();
  res.json({ message: "Review deleted" });
};
