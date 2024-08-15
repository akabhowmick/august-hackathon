import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Hotel } from "../types/interfaces";
import axios from "axios";

interface HotelContextType {
  hotels: Hotel[];
  setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
}

const HotelContext = createContext<HotelContextType>({} as HotelContextType);

export const HotelProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    axios
      .get("/api/hotels")
      .then((response) => setHotels(response.data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <HotelContext.Provider
      value={{
        hotels,
        setHotels,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHotelContext = () => useContext(HotelContext);
