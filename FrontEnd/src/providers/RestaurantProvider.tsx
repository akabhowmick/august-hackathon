import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Restaurant } from "../types/interfaces";
import axios from "axios";

interface RestaurantContextType {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
}

const RestaurantContext = createContext<RestaurantContextType>({} as RestaurantContextType);

export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRestaurantContext = () => useContext(RestaurantContext);
