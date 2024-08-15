import { useFlightContext } from "../../providers/FlightProvider";
import { SingleFLight } from "./SingleFlight";

export const FlightList: React.FC = () => {
  const { flights } = useFlightContext();
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <SingleFLight flight={flight} />
          </li>
        ))}
      </ul>
    </div>
  );
};
