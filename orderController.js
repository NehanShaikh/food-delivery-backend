const { orders } = require('../models/order');
const { validateOrder } = require('../utils/validation');
const { menuItems } = require('../models/menu');

const placeOrder = (req, res) => {
  try {
    const newOrder = req.body;
    validateOrder(newOrder, menuItems);
    newOrder.id = orders.length + 1;
    newOrder.status = 'Preparing';
    newOrder.timestamp = new Date();
    orders.push(newOrder);
    res.status(201).json({ message: 'Order placed', order: newOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrder = (req, res) => {
  const orderId = parseInt(req.params.id, 10);
  const order = orders.find(o => o.id === orderId);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
};

module.exports = { placeOrder, getOrder };
