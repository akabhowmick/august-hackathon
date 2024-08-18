import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Flight } from "../types/interfaces";
import axios from "axios";
import { useUserInfoContext } from "./UserInfoProvider";

interface FlightContextType {
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
}

const FlightContext = createContext<FlightContextType>({} as FlightContextType);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const { travelInfo } = useUserInfoContext();
  console.log(travelInfo);
  const [flights, setFlights] = useState<Flight[]>([]);

  const url = "https://api.aviationstack.com/v1/flightsMON";

  useEffect(() => {
    const params = {
      access_key: "f68bbe67aa8bc875168c6753c58aeca9",
    };
    console.log(travelInfo);
    axios
      .get(url, { params })
      .then((response) => {
        console.log("getting a response back", response.data);
        const apiResponse = response.data;
        if (Array.isArray(apiResponse["results"])) {
          apiResponse["results"].forEach((flight) => {
            if (!flight["live"]["is_ground"]) {
              console.log(
                `${flight["airline"]["name"]} flight ${flight["flight"]["iata"]}`,
                `from ${flight["departure"]["airport"]} (${flight["departure"]["iata"]})`,
                `to ${flight["arrival"]["airport"]} (${flight["arrival"]["iata"]}) is in the air.`
              );
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [travelInfo]);

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
