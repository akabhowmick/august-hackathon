import { Destination } from "../../types/interfaces";

export const SingleDestination = ({ destination }: { destination: Destination }) => {
  return (
    <>
      <strong>{destination.name}</strong> - {destination.location.city},{" "}
      {destination.location.country}
    </>
  );
};
