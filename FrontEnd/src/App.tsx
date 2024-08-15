import { AIChatBox } from "./Components/ChatBox/ChatBox";
import { Header } from "./Components/Header/Header";
import "react-chat-widget/lib/styles.css";

import { AttractionList } from "./Components/Attractions/AttractionList";
import { FlightList } from "./Components/Flights/FlightList";
import { HotelsList } from "./Components/Hotels/HotelList";
import { RestaurantsList } from "./Components/Restaurants/RestaurantList";

function App() {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
}

export default App;
