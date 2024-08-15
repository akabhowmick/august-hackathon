import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Flight } from "../types/interfaces";
import axios from "axios";

interface FlightContextType {
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
}

const FlightContext = createContext<FlightContextType>({} as FlightContextType);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    axios
      .get("/api/flights")
      .then((response) => setFlights(response.data))
      .catch((error) => console.error("Error fetching flights:", error));
  }, []);

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
