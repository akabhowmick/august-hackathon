import { useState } from "react";
import { useHotelContext } from "../../providers/HotelProvider";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { SingleHotel } from "./SingleHotel";
import { Hotel } from "../../types/interfaces";

export const HotelList: React.FC = () => {
  const { hotels } = useHotelContext();
  const { itinerary, setItinerary } = useUserInfoContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleItinerary = (hotel: Hotel) => {
    const isAlreadyInItinerary = itinerary.hotels.some((h) => h.id === hotel.id);

    if (isAlreadyInItinerary) {
      // Remove hotel if already in the itinerary
      const updatedHotels = itinerary.hotels.filter((h) => h.id !== hotel.id);
      setItinerary((prev) => ({
        ...prev,
        hotels: updatedHotels,
      }));
    } else {
      // Add hotel if not in the itinerary
      setItinerary((prev) => ({
        ...prev,
        hotels: [...prev.hotels, hotel],
      }));
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">Available Hotels</h2>
      <div className="dropdown">
        <button
          className="dropdown-button bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleDropdown}
        >
          {isOpen ? "Hide Hotels" : "Select a Hotel"}
        </button>
        {isOpen && (
          <ul className="dropdown-content bg-white shadow-lg rounded-md mt-2 p-4 w-full">
            {hotels.length > 0 &&
              hotels.map((hotel) => (
                <li key={hotel.id} className="mb-4">
                  <SingleHotel
                    hotel={hotel}
                    isPicked={itinerary.hotels.some((h) => h.id === hotel.id)}
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
