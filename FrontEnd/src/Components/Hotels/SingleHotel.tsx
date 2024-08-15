import { Hotel } from "../../types/interfaces";

export const SingleHotel = ({ hotel }: { hotel: Hotel }) => {
  return (
    <>
      <strong>{hotel.name}</strong> - {hotel.location} <br />
      Price: ${hotel.pricePerNight} per night <br />
      Rating: {hotel.rating}/5
    </>
  );
};
