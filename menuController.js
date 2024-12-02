const { validateMenuItem } = require('../utils/validation');
const { menuItems } = require('../models/menu');

const addMenuItem = (req, res) => {
  try {
    const newItem = req.body;
    validateMenuItem(newItem);
    newItem.id = menuItems.length + 1;
    menuItems.push(newItem);
    res.status(201).json({ message: 'Menu item added', item: newItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMenu = (req, res) => {
  res.status(200).json(menuItems);
};

module.exports = { addMenuItem, getMenu };
