import { Flight } from "../../types/interfaces";

export const SingleFLight = ({ flight }: { flight: Flight }) => {
  return (
    <>
      <strong>{flight.airline}</strong> from {flight.departure} to {flight.arrival} <br />
      Departure: {flight.departureTime}, Arrival: {flight.arrivalTime} <br />
      Price: ${flight.price}
    </>
  );
};
