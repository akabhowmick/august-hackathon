import { Restaurant } from "../../types/interfaces";

export const SingleRestaurant = ({
  restaurant,
  isPicked,
  toggleItinerary,
}: {
  restaurant: Restaurant;
  isPicked: boolean;
  toggleItinerary: (restaurant: Restaurant) => void;
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <strong className="text-lg font-semibold">{restaurant.name}</strong> - {restaurant.cuisine}{" "}
      <br />
      Location: {restaurant.location} <br />
      Rating: {restaurant.rating}/5 <br />
      <button
        onClick={() => toggleItinerary(restaurant)}
        className={`mt-2 p-2 rounded-md ${isPicked ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {isPicked ? "Remove from Itinerary" : "Add to Itinerary"}
      </button>
    </div>
  );
};
