import { Attraction } from "../../types/interfaces";

export const SingleAttraction = ({ attraction }: { attraction: Attraction }) => {
  return (
    <>
      <strong>{attraction.name}</strong> - {attraction.location.city},{" "}
      {attraction.location.country}
    </>
  );
};
