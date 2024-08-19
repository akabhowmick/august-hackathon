import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Hotel } from "../types/interfaces";
import { hotelsData } from "../MockData/mockHotels";
import { useUserInfoContext } from "./UserInfoProvider";

interface HotelContextType {
  hotels: Hotel[];
  setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
}

const HotelContext = createContext<HotelContextType>({} as HotelContextType);

export const HotelProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const { currentStep } = useUserInfoContext();

  useEffect(() => {
    setHotels(hotelsData);
  }, [currentStep]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "/api/hotels",
  //     params: {
  //       pageNumber: "1",
  //       currencyCode: "USD",
  //     },
  //     headers: {
  //       "x-rapidapi-key": "7102454959msh770337f56eaeab0p17734djsn5c461c2c8430",
  //       "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
  //     },
  //   };
  //   const getHotels = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       setHotels(response.data);
  //     } catch (error) {
  //       console.error("Error fetching hotels:", error);
  //     }
  //   };

  //   getHotels();
  // }, []); 

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
