import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Flight } from "../types/interfaces";
import { flightsData } from "../MockData/mockFlights";
import { useUserInfoContext } from "./UserInfoProvider";

interface FlightContextType {
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
}

const FlightContext = createContext<FlightContextType>({} as FlightContextType);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [flights, setFlights] = useState<Flight[]>([]);

  const { currentStep } = useUserInfoContext();

  useEffect(() => {
    setFlights(flightsData);
  }, [currentStep]);

  return (
    <FlightContext.Provider
      value={{
        flights,
        setFlights,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFlightContext = () => useContext(FlightContext);
