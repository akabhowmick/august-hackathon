import { useState } from "react";
import { useRestaurantContext } from "../../providers/RestaurantProvider";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { SingleRestaurant } from "./SingleRestaurant";
import { Restaurant } from "../../types/interfaces";

export const RestaurantList: React.FC = () => {
  const { restaurants } = useRestaurantContext();
  const { itinerary, setItinerary } = useUserInfoContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleItinerary = (restaurant: Restaurant) => {
    const isAlreadyInItinerary = itinerary.restaurants.some((r) => r.id === restaurant.id);

    if (isAlreadyInItinerary) {
      // Remove restaurant if already in the itinerary
      const updatedRestaurants = itinerary.restaurants.filter((r) => r.id !== restaurant.id);
      setItinerary((prev) => ({
        ...prev,
        restaurants: updatedRestaurants,
      }));
    } else {
      // Add restaurant if not in the itinerary
      setItinerary((prev) => ({
        ...prev,
        restaurants: [...prev.restaurants, restaurant],
      }));
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">Top Restaurants</h2>
      <div className="dropdown">
        <button
          className="dropdown-button bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleDropdown}
        >
          {isOpen ? "Hide Restaurants" : "Select a Restaurant"}
        </button>
        {isOpen && (
          <ul className="dropdown-content bg-white shadow-lg rounded-md mt-2 p-4 w-full">
            {restaurants.length > 0 &&
              restaurants.map((restaurant) => (
                <li key={restaurant.id} className="mb-4">
                  <SingleRestaurant
                    restaurant={restaurant}
                    isPicked={itinerary.restaurants.some((r) => r.id === restaurant.id)}
                    toggleItinerary={toggleItinerary}
                  />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
