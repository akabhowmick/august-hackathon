import { useHotelContext } from "../../providers/HotelProvider";
import { SingleHotel } from "./SingleHotel";

export const HotelsList: React.FC = () => {
  const { hotels } = useHotelContext();

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {/* {hotels?.map((hotel) => (
          <li key={hotel.id}>
            <SingleHotel hotel={hotel} />
          </li>
        ))} */}
      </ul>
    </div>
  );
};
