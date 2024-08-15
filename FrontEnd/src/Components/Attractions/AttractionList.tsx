// src/components/AttractionList.tsx
import React, { useState } from "react";
import { Attraction } from "../../types/interfaces";
import { SingleAttraction } from "./SingleAttraction";

export const AttractionList: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  // use a provider for this
  // useEffect(() => {
  //   axios
  //     .get("/api/attractions")
  //     .then((response) => setAttractions(response.data))
  //     .catch((error) => console.error("Error fetching attractions:", error));
  // }, []);

  const handleSelect = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    console.log("Attraction selected", setAttractions);
  };

  return (
    <div>
      <h2>Key Attractions</h2>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction._id} onClick={() => handleSelect(attraction)}>
            <SingleAttraction attraction={attraction} />
          </li>
        ))}
      </ul>
      {selectedAttraction && (
        <div>
          <h3>Selected Attraction</h3>
          <p>{selectedAttraction.description}</p>
          <p>Category: {selectedAttraction.category}</p>
          <p>Popularity: {selectedAttraction.popularityScore}/10</p>
        </div>
      )}
    </div>
  );
};