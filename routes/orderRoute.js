const express = require('express');
const Order = require('../models/orderModel');
const { isAuth, isAdmin } =  require('../util');

const router = express.Router();

// Get all orders
router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user').catch((error) => console.log(error.reason));
  res.send(orders);
});

// Get Admin orders
router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).catch((error) => console.log(error.reason));
  res.send(orders);
});

// Get order
router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }).catch((error) => console.log(error.reason));
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

// Delete order
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }).catch((error) => console.log(error.reason));
  if (order) {
    const deletedOrder = await order.remove().catch((error) => console.log(error.reason));
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

// New order
router.post("/", isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save().catch((error) => console.log(error.reason));
  if (newOrderCreated) {
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
  } else {
    res.status(402).send("Order Failed")
  }
});


router.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id).catch((error) => console.log(error.reason));
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: 'paypal',
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save().catch((error) => console.log(error.reason));
    res.send({ message: 'Order Paid.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }
});

module.exports = router;
