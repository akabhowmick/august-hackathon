const express = require("express");
const axios = require("axios");
const router = express.Router();
const { flightsData, hotelsData, restaurantsData, attractionsData } = require("../data/mockData");

// Example endpoint to get travel suggestions
router.post("/suggestions", async (req, res) => {
  const { budget, startDate, endDate, startLocation, endLocation, numberOfPeople } = req.body;

  try {
    // Fetch flights
    const flights = flightsData.filter((flight) => flight.price <= budget);

    // Fetch hotels
    const hotels = hotelsData.filter((hotel) => hotel.pricePerNight * numberOfPeople <= budget);

    // Fetch restaurants
    const restaurants = restaurantsData.filter((restaurant) => restaurant.location === endLocation);

    // Fetch attractions
    const attractions = attractionsData.filter(
      (attraction) => attraction.location.city === endLocation
    );

    // You can add more complex filtering logic based on user inputs here

    res.json({
      flights,
      hotels,
      restaurants,
      attractions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
