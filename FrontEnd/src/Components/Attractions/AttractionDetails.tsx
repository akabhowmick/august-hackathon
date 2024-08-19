import { Attraction } from "../../types/interfaces";

const AttractionDetails = ({
  attraction,
  isPicked,
  toggleItinerary,
}: {
  attraction: Attraction;
  isPicked: boolean;
  toggleItinerary: (attraction: Attraction) => void;
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <strong className="text-lg font-semibold">{attraction.name}</strong> - {attraction.category}{" "}
      <br />
      <p>
        Location: {attraction.location.city}, {attraction.location.country}
      </p>
      <p>Recommended Visit Time: {attraction.recommendedVisitTime}</p>
      <button
        onClick={() => toggleItinerary(attraction)}
        className={`mt-2 p-2 rounded-md ${isPicked ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {isPicked ? "Remove from Itinerary" : "Add to Itinerary"}
      </button>
    </div>
  );
};

export default AttractionDetails;
