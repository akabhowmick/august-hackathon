import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    airline: String,
    departure: Date,
    arrival: Date,
    origin: String,
    destination: String,
    price: Number,
});


const FoodItemSchema = new mongoose.Schema({
    name: String,
    type: String,
    restaurantId: mongoose.Schema.Types.ObjectId,
});

export const Flight = mongoose.model('Flight', FlightSchema);

export const FoodItem = mongoose.model('FoodItem', FoodItemSchema);
