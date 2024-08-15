import { Restaurant } from "../../types/interfaces";

export const SingleRestaurant = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <>
      <strong>{restaurant.name}</strong> - {restaurant.cuisine} <br />
      Location: {restaurant.location} <br />
      Rating: {restaurant.rating}/5
    </>
  );
};
