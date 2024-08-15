// src/components/Hotels.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hotel } from "../../types/interfaces";
import { SingleHotel } from "./SingleHotel";

export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    axios
      .get("/api/hotels")
      .then((response) => setHotels(response.data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <SingleHotel hotel={hotel} />
          </li>
        ))}
      </ul>
    </div>
  );
};

