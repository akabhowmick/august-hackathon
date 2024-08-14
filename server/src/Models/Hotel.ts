import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  pricePerNight: Number,
  rating: Number,
});

export const Hotel = mongoose.model('Hotel', HotelSchema);