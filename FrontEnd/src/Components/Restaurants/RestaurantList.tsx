import { useRestaurantContext } from "../../providers/RestaurantProvider";
import { SingleRestaurant } from "./SingleRestaurant";

export const RestaurantsList = () => {
  const { restaurants } = useRestaurantContext();
  return (
    <div>
      <h2>Top Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <SingleRestaurant restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};
