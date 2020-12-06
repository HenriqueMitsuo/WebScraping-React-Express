import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['draft', 'imported'],
    default: 'imported',
  },
  imported_t: Date,
  barcode: String,
  product_name: String,
  quantity: String,
  categories: String,
  packaging: String,
  brands: String,
  image_url: String,
  url: String,
});

export const Product = mongoose.model('products', productSchema);