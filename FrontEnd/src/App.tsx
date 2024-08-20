import { Header } from "./Components/Header/Header";
import "react-chat-widget/lib/styles.css";

import { FlightProvider } from "./providers/FlightProvider";
import { HotelProvider } from "./providers/HotelProvider";
import { AttractionProvider } from "./providers/AttractionProvider";
import { RestaurantProvider } from "./providers/RestaurantProvider";
import { TravelForm } from "./Components/TravelForm/TravelForm";
import { useUserInfoContext } from "./providers/UserInfoProvider";
import SummaryPage from "./Components/Summary/Summary";
import { ItineraryList } from "./Components/Itinerary/ItineraryList";
import { AISummary } from "./Components/Summary/AISummary";

function App() {
  const { currentStep } = useUserInfoContext();

  return (
    <>
      <Header />
      <FlightProvider>
        <HotelProvider>
          <AttractionProvider>
            <RestaurantProvider>
              {currentStep === "initialUserInfo" && <TravelForm />}
              {currentStep === "AIChatting" && <ItineraryList />}
              {currentStep === "FinalSummary" && <SummaryPage />}
              {currentStep === "AIFinalSummary" && <AISummary  />}
            </RestaurantProvider>
          </AttractionProvider>
        </HotelProvider>
      </FlightProvider>
    </>
  );
}

export default App;
