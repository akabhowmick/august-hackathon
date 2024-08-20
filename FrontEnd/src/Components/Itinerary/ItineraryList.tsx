import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { AttractionList } from "../Attractions/AttractionList";
import { Chatbox } from "../ChatBox/ChatBox";
import { FlightList } from "../Flights/FlightList";
import { HotelList } from "../Hotels/HotelList";
import { RestaurantList } from "../Restaurants/RestaurantList";
import { Itinerary } from "./Itinerary";

export const ItineraryList = () => {
  const { setCurrentStep, setFinalChoices, itinerary } = useUserInfoContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFinalChoices(itinerary);
    setCurrentStep("FinalSummary");
  };

  return (
    <main className="m-4 flex-col text-black justify-center items-center bg-white p-8 rounded-lg shadow-md">
      <h2>
        <strong>Step 2:</strong> Plan your itinerary by selecting from the options below OR ask our
        Vacation Planner AI to do the work for you!
      </h2>
      <section id="flights" className="mb-2">
        <FlightList />
      </section>
      <section id="hotels" className="mb-2">
        <HotelList />
      </section>
      <section id="restaurants" className="mb-2">
        <RestaurantList />
      </section>
      <section id="attractions" className="mb-2">
        <AttractionList />
      </section>
      <Itinerary />
      <Chatbox />
      <button
        className="w-full bg-green-600 text-white py-2 px-4 my-2 rounded-md hover:bg-green-700"
        onClick={handleSubmit}
      >
        See your finalized Itinerary!
      </button>
    </main>
  );
};
