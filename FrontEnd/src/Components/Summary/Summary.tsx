import { Attraction, Flight, Hotel, Restaurant } from "../../types/interfaces";
import { useUserInfoContext } from "../../providers/UserInfoProvider";

const SummaryPage = () => {
  const { finalChoices } = useUserInfoContext();

  return (
    <div className="m-4 p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Step 3: Here is your summarized trip contents!! Enjoy!!
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Flights:</h3>
        <ul className="space-y-4">
          {finalChoices.flights.map((flight: Flight) => (
            <li key={flight.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <strong className="block text-lg font-semibold">Airline:</strong> {flight.airline}
              <br />
              <strong>Departure:</strong> {flight.departure} at {flight.departureTime}
              <br />
              <strong>Arrival:</strong> {flight.arrival} at {flight.arrivalTime}
              <br />
              <strong>Price:</strong> ${flight.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Hotels:</h3>
        <ul className="space-y-4">
          {finalChoices.hotels.map((hotel: Hotel) => (
            <li key={hotel.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <strong className="block text-lg font-semibold">Name:</strong> {hotel.name}
              <br />
              <strong>Location:</strong> {hotel.location}
              <br />
              <strong>Price per Night:</strong> ${hotel.pricePerNight}
              <br />
              <strong>Rating:</strong> {hotel.rating} stars
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Restaurants:</h3>
        <ul className="space-y-4">
          {finalChoices.restaurants.map((restaurant: Restaurant) => (
            <li key={restaurant.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <strong className="block text-lg font-semibold">Name:</strong> {restaurant.name}
              <br />
              <strong>Cuisine:</strong> {restaurant.cuisine}
              <br />
              <strong>Location:</strong> {restaurant.location}
              <br />
              <strong>Rating:</strong> {restaurant.rating} stars
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Activities:</h3>
        <ul className="space-y-4">
          {finalChoices.attractions.map((attraction: Attraction) => (
            <li key={attraction.name} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <strong className="block text-lg font-semibold">Name:</strong> {attraction.name}
              <br />
              <strong>Description:</strong> {attraction.description}
              <br />
              <strong>Location:</strong> {attraction.location.city}, {attraction.location.country}
              <br />
              <strong>Category:</strong> {attraction.category}
              <br />
              {/* <strong>Image:</strong>
              <img
                src={attraction.imageUrl}
                alt={attraction.name}
                className="mt-2 w-full h-32 object-cover rounded-md"
              />
              <br /> */}
              <strong>Recommended Visit Time:</strong> {attraction.recommendedVisitTime}
              <br />
              <strong>Popularity Score:</strong> {attraction.popularityScore}
              <br />
              <strong>Opening Hours:</strong> {attraction.openingHours.open} -{" "}
              {attraction.openingHours.close}
              <br />
              <strong>Entry Fee:</strong> ${attraction.entryFee}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryPage;
