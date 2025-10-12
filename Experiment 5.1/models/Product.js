const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be >= 0']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: {
        values: ['Electronics', 'Accessories', 'Stationery', 'Clothing', 'Other'],
        message: '{VALUE} is not a valid category'
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
