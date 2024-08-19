import { AttractionList } from "../Attractions/AttractionList";
import { Chatbox } from "../ChatBox/ChatBox";
import { FlightList } from "../Flights/FlightList";
import { HotelList } from "../Hotels/HotelList";
import { RestaurantList } from "../Restaurants/RestaurantList";
import { Itinerary } from "./Itinerary";

export const ItineraryList = () => {
  return (
    <main className="m-4 flex-col text-black justify-center items-center bg-white p-8 rounded-lg shadow-md">
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
    </main>
  );
};
