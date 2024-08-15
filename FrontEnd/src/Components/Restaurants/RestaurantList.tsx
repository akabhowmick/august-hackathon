// src/components/Restaurants.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "../../types/interfaces";

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div>
      <h2>Top Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.cuisine} <br />
            Location: {restaurant.location} <br />
            Rating: {restaurant.rating}/5
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
