import express from 'express';
import hotelsRouter from "./Routes/hotels";
import restaurantsRouter from "./Routes/restaurants";
import attractionsRouter from "./Routes/attractions";
import flightsRouter from "./Routes/flights";
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hotels', hotelsRouter);
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/attractions', attractionsRouter);
app.use('/api/flights', flightsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
