import express from 'express';
import axios from 'axios';
import { Flight } from './Models/Flight';

const router = express.Router();

router.get('/flights', async (req, res) => {
    const flights = await Flight.find();
    const skyscannerData = await axios.get('Skyscanner API URL');
    // Combine data
    res.json({ localFlights: flights, realTimeFlights: skyscannerData.data });
});

// Repeat for Hotels, Restaurants, Food Items

export default router;


