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
import { Chatbox } from "./Components/ChatBox/ChatBox";
import SummaryPage from "./Components/Summary/Summary";

function App() {
  const { currentStep, finalChoices } = useUserInfoContext();

  const apiTravelInfo = (
    <main>
      <Chatbox />
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
              {currentStep === "FinalSummary" && <SummaryPage choices={finalChoices} />}
            </RestaurantProvider>
          </AttractionProvider>
        </HotelProvider>
      </FlightProvider>
    </>
  );
}

export default App;
