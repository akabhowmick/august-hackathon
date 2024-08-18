import { AIChatBox } from "./Components/ChatBox/ChatBox";
import { Header } from "./Components/Header/Header";
import "react-chat-widget/lib/styles.css";

import { AttractionList } from "./Components/Attractions/AttractionList";
import { FlightList } from "./Components/Flights/FlightList";
import { HotelsList } from "./Components/Hotels/HotelList";
import { RestaurantsList } from "./Components/Restaurants/RestaurantList";

import { FlightProvider } from "./providers/FlightProvider";
import { HotelProvider } from "./providers/HotelProvider";
import { AttractionProvider } from "./providers/AttractionProvider";
import { RestaurantProvider } from "./providers/RestaurantProvider";
import { TravelForm } from "./Components/TravelForm/TravelForm";

function App() {
  return (
    <>
      <Header />
      <FlightProvider>
        <HotelProvider>
          <AttractionProvider>
            <RestaurantProvider>
              <main>
                <TravelForm />
                <section id="flights">
                  <FlightList />
                </section>
                <section id="hotels">
                  <HotelsList />
                </section>
                <section id="restaurants">
                  <RestaurantsList />
                </section>
                <section id="attractions">
                  <AttractionList />
                </section>
                <AIChatBox />
              </main>
            </RestaurantProvider>
          </AttractionProvider>
        </HotelProvider>
      </FlightProvider>
    </>
  );
}

export default App;
