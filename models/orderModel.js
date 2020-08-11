const mongoose = require('mongoose');

// Shipping
const shippingSchema = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true }
};

// Payments
const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

// Order Item
const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

// Order
const date = new Date().toISOString();
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: {date} },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: {date} },
  }, 
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);