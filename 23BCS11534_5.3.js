// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema
const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  variants: [variantSchema]
});

const Product = mongoose.model('Product', productSchema);

// Insert sample data
app.post('/insert', async (req, res) => {
  const sampleProducts = [
    {
      name: "Smartphone",
      price: 600,
      category: "Electronics",
      variants: []
    },
    {
      name: "Running Shoes",
      price: 1100,
      category: "Footwear",
      variants: [
        { color: "Red", size: "8", stock: 10 },
        { color: "Blue", size: "9", stock: 6 }
      ]
    }
  ];
  await Product.insertMany(sampleProducts);
  res.send("Sample products inserted");
});

// Get all products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get products by category
app.get('/products/category/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

// Get products by color (nested query)
app.get('/products/by-color/:color', async (req, res) => {
  const products = await Product.find({ "variants.color": req.params.color });
  res.json(products);
});

// Get project-specific variant details (name + variants)
app.get('/products/variants', async (req, res) => {
  const products = await Product.find({}, { name: 1, variants: 1, _id: 0 });
  res.json(products);
});

// Run server
app.listen(3000, () => console.log("Server running on port 3000"));
