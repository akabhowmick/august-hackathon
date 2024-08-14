import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String,
  priceRange: String,
  rating: Number,
});


export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);