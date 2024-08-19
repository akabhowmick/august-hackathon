import { useState } from "react";
import { useFlightContext } from "../../providers/FlightProvider";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { SingleFLight } from "./SingleFlight";
import { Flight } from "../../types/interfaces";

export const FlightList: React.FC = () => {
  const { flights } = useFlightContext();
  const { itinerary, setItinerary } = useUserInfoContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleItinerary = (flight: Flight) => {
    const isAlreadyInItinerary = itinerary.flights.some((f) => f.id === flight.id);

    if (isAlreadyInItinerary) {
      // Remove flight if already in the itinerary
      const updatedFlights = itinerary.flights.filter((f) => f.id !== flight.id);
      setItinerary((prev) => ({
        ...prev,
        flights: updatedFlights,
      }));
    } else {
      // Add flight if not in the itinerary
      setItinerary((prev) => ({
        ...prev,
        flights: [...prev.flights, flight],
      }));
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">Available Flights</h2>
      <div className="dropdown">
        <button
          className="dropdown-button bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleDropdown}
        >
          {isOpen ? "Hide Flights" : "Select a Flight"}
        </button>
        {isOpen && (
          <ul className="dropdown-content bg-white shadow-lg rounded-md mt-2 p-4 w-full">
            {flights.length > 0 &&
              flights.map((flight) => (
                <li key={flight.id} className="mb-4">
                  <SingleFLight
                    flight={flight}
                    isPicked={itinerary.flights.some((f) => f.id === flight.id)}
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
