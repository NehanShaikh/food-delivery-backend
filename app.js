const express = require('express');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
