import { useUserInfoContext } from "../../providers/UserInfoProvider";

export const Itinerary = () => {
  const { itinerary } = useUserInfoContext();

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Your Itinerary</h3>
      <ul>
        {itinerary.attractions.length > 0 &&
          itinerary.attractions.map((attraction, index) => (
            <li key={attraction.name} className="p-2 border rounded-md mb-2">
              Activity #{index + 1} {attraction.name}
            </li>
          ))}
      </ul>
      <ul>
        {itinerary.hotels.length > 0 &&
          itinerary.hotels.map((hotel, index) => (
            <li key={hotel.name} className="p-2 border rounded-md mb-2">
              Hotel #{index + 1} {hotel.name}
            </li>
          ))}
      </ul>
      <ul>
        {itinerary.flights.length > 0 &&
          itinerary.flights.map((flight, index) => (
            <li key={flight.id} className="p-2 border rounded-md mb-2">
              Flight #{index + 1} {flight.departureTime} to {flight.arrivalTime}
            </li>
          ))}
      </ul>
      <ul>
        {itinerary.restaurants.length > 0 &&
          itinerary.restaurants.map((restaurant, index) => (
            <li key={restaurant.id} className="p-2 border rounded-md mb-2">
              Dining at #{index + 1} {restaurant.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
