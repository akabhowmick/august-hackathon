import { Hotel } from "../../types/interfaces";

export const SingleHotel = ({
  hotel,
  isPicked,
  toggleItinerary,
}: {
  hotel: Hotel;
  isPicked: boolean;
  toggleItinerary: (hotel: Hotel) => void;
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <strong className="text-lg font-semibold">{hotel.name}</strong> <br />
      Location: {hotel.location} <br />
      Price per night: ${hotel.pricePerNight} <br />
      Rating: {hotel.rating}/5 <br />
      <button
        onClick={() => toggleItinerary(hotel)}
        className={`mt-2 p-2 rounded-md ${isPicked ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {isPicked ? "Remove from Itinerary" : "Add to Itinerary"}
      </button>
    </div>
  );
};
