import React from "react";
import { Attraction, Flight, Hotel, Restaurant, UserChoice } from "../../types/interfaces";

const SummaryPage: React.FC<{ choices: UserChoice }> = ({ choices }) => {
  return (
    <div className="m-4 flex justify-center items-center">
      <h2>Step 3: Here is your summarized trip contents!! Enjoy!!</h2>
      <h3>Flights:</h3>
      <ul>
        {choices.flights.map((flight: Flight) => (
          <li key={flight.id}>
            <strong>Airline:</strong> {flight.airline}
            <br />
            <strong>Departure:</strong> {flight.departure} at {flight.departureTime}
            <br />
            <strong>Arrival:</strong> {flight.arrival} at {flight.arrivalTime}
            <br />
            <strong>Price:</strong> ${flight.price}
          </li>
        ))}
      </ul>
      <h3>Hotels:</h3>
      <ul>
        {choices.hotels.map((hotel: Hotel) => (
          <li key={hotel.id}>
            <strong>Name:</strong> {hotel.name}
            <br />
            <strong>Location:</strong> {hotel.location}
            <br />
            <strong>Price per Night:</strong> ${hotel.pricePerNight}
            <br />
            <strong>Rating:</strong> {hotel.rating} stars
          </li>
        ))}
      </ul>
      <h3>Restaurants:</h3>
      <ul>
        {choices.restaurants.map((restaurant: Restaurant) => (
          <li key={restaurant.id}>
            <strong>Name:</strong> {restaurant.name}
            <br />
            <strong>Cuisine:</strong> {restaurant.cuisine}
            <br />
            <strong>Location:</strong> {restaurant.location}
            <br />
            <strong>Rating:</strong> {restaurant.rating} stars
          </li>
        ))}
      </ul>
      <h3>Activities:</h3>
      <ul>
        {choices.attractions.map((attraction: Attraction) => (
          <li key={attraction.name}>
            <strong>Name:</strong> {attraction.name}
            <br />
            <strong>Description:</strong> {attraction.description}
            <br />
            <strong>Location:</strong> {attraction.location.city}, {attraction.location.country}
            <br />
            <strong>Category:</strong> {attraction.category}
            <br />
            <strong>Image:</strong>{" "}
            <img src={attraction.imageUrl} alt={attraction.name} style={{ maxWidth: "100px" }} />
            <br />
            <strong>Recommended Visit Time:</strong> {attraction.recommendedVisitTime}
            <br />
            <strong>Popularity Score:</strong> {attraction.popularityScore}
            <br />
            <strong>Opening Hours:</strong> {attraction.openingHours.open} -{" "}
            {attraction.openingHours.close}
            <br />
            <strong>Entry Fee:</strong> ${attraction.entryFee}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryPage;
