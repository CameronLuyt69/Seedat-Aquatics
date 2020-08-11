const mongoose = require('mongoose');

// Review
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

// Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: false },
  image: { type: String, required: false },
  brand: { type: String, required: false },
  price: { type: Number, default: 0, required: false },
  category: { type: String, required: false },
  description: { type: String, required: false },
  rating: { type: Number, default: 0, required: false },
  numReviews: { type: Number, default: 0, required: false },
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Product', productSchema);;
