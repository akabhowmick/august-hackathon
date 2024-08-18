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
import { useUserInfoContext } from "./providers/UserInfoProvider";

function App() {
  const { currentStep } = useUserInfoContext();

  const apiTravelInfo = (
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
    </main>
  );

  return (
    <>
      <Header />
      <FlightProvider>
        <HotelProvider>
          <AttractionProvider>
            <RestaurantProvider>
              {currentStep === "initialUserInfo" && <TravelForm />}
              {currentStep === "AIChatting" && apiTravelInfo}
              {currentStep === "FinalSummary" && <AIChatBox />}
            </RestaurantProvider>
          </AttractionProvider>
        </HotelProvider>
      </FlightProvider>
    </>
  );
}

export default App;
