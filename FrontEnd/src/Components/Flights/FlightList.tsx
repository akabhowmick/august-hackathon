// src/components/Flights.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleFLight } from "./SingleFlight";

interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

const Flights: React.FC = () => {
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

export default Flights;
