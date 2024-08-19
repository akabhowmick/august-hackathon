import { Flight } from "../../types/interfaces";

export const SingleFLight = ({
  flight,
  isPicked,
  toggleItinerary,
}: {
  flight: Flight;
  isPicked: boolean;
  toggleItinerary: (flight: Flight) => void;
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <strong className="text-lg font-semibold">{flight.airline}</strong> from {flight.departure} to {flight.arrival} <br />
      Departure: {flight.departureTime}, Arrival: {flight.arrivalTime} <br />
      Price: ${flight.price} <br />
      <button
        onClick={() => toggleItinerary(flight)}
        className={`mt-2 p-2 rounded-md ${isPicked ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {isPicked ? "Remove from Itinerary" : "Add to Itinerary"}
      </button>
    </div>
  );
};
