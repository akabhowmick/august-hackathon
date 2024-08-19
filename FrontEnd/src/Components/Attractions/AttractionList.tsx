import { useState } from "react";
import { useAttractionContext } from "../../providers/AttractionProvider";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { Attraction } from "../../types/interfaces";
import AttractionDetails from "./AttractionDetails";

export const AttractionList = () => {
  const { itinerary, setItinerary } = useUserInfoContext();
  const { attractions } = useAttractionContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleItinerary = (attraction: Attraction) => {
    const isAlreadyInItinerary = itinerary.attractions.some((a) => a.name === attraction.name);

    if (isAlreadyInItinerary) {
      // Remove attraction if already in the itinerary
      const updatedAttractions = itinerary.attractions.filter((a) => a.name !== attraction.name);
      setItinerary((prev) => ({
        ...prev,
        attractions: updatedAttractions,
      }));
    } else {
      // Add attraction if not in the itinerary
      setItinerary((prev) => ({
        ...prev,
        attractions: [...prev.attractions, attraction],
      }));
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">Key Attractions</h2>
      <div className="dropdown">
        <button
          className="dropdown-button bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleDropdown}
        >
          {isOpen ? "Hide Attractions" : "Select an Attraction"}
        </button>
        {isOpen && (
          <ul className="dropdown-content bg-white shadow-lg rounded-md mt-2 p-4 w-full">
            {attractions.length > 0 &&
              attractions.map((attraction) => (
                <li key={attraction.name} className="mb-4">
                  <AttractionDetails
                    attraction={attraction}
                    isPicked={itinerary.attractions.some((a) => a.name === attraction.name)}
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
