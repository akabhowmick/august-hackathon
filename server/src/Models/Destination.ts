import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: {
            city: String,
            country: String,
            latitude: Number,
            longitude: Number,
        },
        required: true,
    },
    category: {
        type: String,
        enum: ['Historic', 'Cultural', 'Natural', 'Recreational', 'Shopping', 'Food & Drink'],
        required: true,
    },
    imageUrl: {
        type: String,
    },
    recommendedVisitTime: {
        type: String,
        enum: ['Morning', 'Afternoon', 'Evening', 'Full Day'],
        required: true,
    },
    popularityScore: {
        type: Number,
        min: 0,
        max: 10,
        default: 5,
    },
    nearbyAttractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
    }],
    openingHours: {
        type: {
            open: String,
            close: String,
        },
    },
    entryFee: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            required: true,
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
}, { timestamps: true });

export const Destination = mongoose.model('Destination', DestinationSchema);
