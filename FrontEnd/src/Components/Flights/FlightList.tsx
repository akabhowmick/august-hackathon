// src/components/Flights.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleFLight } from "./SingleFlight";
import { Flight } from "../../types/interfaces";

export const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    axios
      .get("/api/flights")
      .then((response) => setFlights(response.data))
      .catch((error) => console.error("Error fetching flights:", error));
  }, []);

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <SingleFLight flight={flight} />
          </li>
        ))}
      </ul>
    </div>
  );
};
