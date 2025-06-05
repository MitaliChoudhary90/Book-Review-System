const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
}, { timestamps: true });

reviewSchema.index({ user: 1, book: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
