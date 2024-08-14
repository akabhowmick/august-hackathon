// src/components/DestinationList.tsx
import React, { useState } from "react";
import { Destination } from "../../types/interfaces";
import { SingleDestination } from "./SingleDestination";

const DestinationList: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // use a provider for this
  // useEffect(() => {
  //   axios
  //     .get("/api/destinations")
  //     .then((response) => setDestinations(response.data))
  //     .catch((error) => console.error("Error fetching destinations:", error));
  // }, []);

  const handleSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    console.log("Destination selected", setDestinations);
  };

  return (
    <div>
      <h2>Key Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination._id} onClick={() => handleSelect(destination)}>
            <SingleDestination destination={destination} />
          </li>
        ))}
      </ul>
      {selectedDestination && (
        <div>
          <h3>Selected Destination</h3>
          <p>{selectedDestination.description}</p>
          <p>Category: {selectedDestination.category}</p>
          <p>Popularity: {selectedDestination.popularityScore}/10</p>
        </div>
      )}
    </div>
  );
};

export default DestinationList;
