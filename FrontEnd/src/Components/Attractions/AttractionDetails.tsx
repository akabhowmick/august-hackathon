// src/components/AttractionDetails.tsx
import React from "react";
import { Attraction } from "../../types/interfaces";

const AttractionDetails: React.FC<{ attraction: Attraction }> = ({ attraction }) => {
  return (
    <div>
      <h2>{attraction.name}</h2>
      <img
        src={attraction.imageUrl}
        alt={attraction.name}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{attraction.description}</p>
      <p>
        <strong>Location:</strong> {attraction.location.city}, {attraction.location.country}
      </p>
      <p>
        <strong>Category:</strong> {attraction.category}
      </p>
      <p>
        <strong>Recommended Visit Time:</strong> {attraction.recommendedVisitTime}
      </p>
      <p>
        <strong>Popularity Score:</strong> {attraction.popularityScore}/10
      </p>
      <p>
        <strong>Opening Hours:</strong> {attraction.openingHours.open} -{" "}
        {attraction.openingHours.close}
      </p>
      <p>
        <strong>Entry Fee:</strong> ${attraction.entryFee}
      </p>
    </div>
  );
};

export default AttractionDetails;
