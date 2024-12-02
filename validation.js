const validateMenuItem = (item) => {
    const { name, price, category } = item;
    if (!name || typeof name !== 'string') throw new Error('Invalid name');
    if (typeof price !== 'number' || price <= 0) throw new Error('Invalid price');
    if (!['Main Course', 'Appetizer', 'Dessert'].includes(category)) {
      throw new Error('Invalid category');
    }
  };
  
  const validateOrder = (order, menuItems) => {
    const validItemIDs = menuItems.map(item => item.id);
    order.items.forEach(itemId => {
      if (!validItemIDs.includes(itemId)) {
        throw new Error(`Item ID ${itemId} does not exist`);
      }
    });
  };
  
  module.exports = { validateMenuItem, validateOrder };
  