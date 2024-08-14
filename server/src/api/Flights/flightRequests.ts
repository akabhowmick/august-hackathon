import express from 'express';
import { Flight } from '../../Models/Flight'; // import models

const router = express.Router();

// CRUD operations for Flights
router.get('/flights', async (req, res) => {
    const flights = await Flight.find();
    res.json(flights);
});

router.post('/flights', async (req, res) => {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).send(flight);
});

export default router;
