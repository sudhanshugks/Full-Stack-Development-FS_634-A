require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());

// Basic health
app.get('/', (req, res) => res.send('Product CRUD API is alive ✨'));

// Mount routes
app.use('/api/products', productRoutes);

// Error fallback
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/productdb';

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
