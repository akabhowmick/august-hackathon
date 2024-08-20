import { useState, createContext, useContext, ReactNode } from "react";
import { TravelInfo, UserChoice } from "../types/interfaces";

interface User {
  id: string;
  name: string;
  email: string;
}

type AllowedValues = "initialUserInfo" | "AIChatting" | "FinalSummary" | "AIFinalSummary";

const dummyInput: TravelInfo = {
  budget: 2000,
  startDate: "2025-03-27",
  endDate: "2025-03-31",
  startLocation: "New York",
  endLocation: "Boston",
  numberOfPeople: 4,
};

// const default = {
//   budget: 0,
//   startDate: "",
//   endDate: "",
//   startLocation: "",
//   endLocation: "",
//   numberOfPeople: 0,
// }

interface UserInfoContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  travelInfo: TravelInfo;
  setTravelInfo: React.Dispatch<React.SetStateAction<TravelInfo>>;
  currentStep: AllowedValues;
  setCurrentStep: React.Dispatch<React.SetStateAction<AllowedValues>>;
  finalChoices: UserChoice;
  setFinalChoices: React.Dispatch<React.SetStateAction<UserChoice>>;
  itinerary: UserChoice;
  setItinerary: React.Dispatch<React.SetStateAction<UserChoice>>;
  aIGeneratedString: string;
  setAIGeneratedString: React.Dispatch<React.SetStateAction<string>>;
}

const UserInfoContext = createContext<UserInfoContextType>({} as UserInfoContextType);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [travelInfo, setTravelInfo] = useState<TravelInfo>(dummyInput);
  const [currentStep, setCurrentStep] = useState<AllowedValues>("initialUserInfo");
  const [aIGeneratedString, setAIGeneratedString] = useState<string>("");
  const [itinerary, setItinerary] = useState<UserChoice>({
    flights: [],
    hotels: [],
    restaurants: [],
    attractions: [],
    totalCost: 0,
  });

  const [finalChoices, setFinalChoices] = useState<UserChoice>({
    flights: [],
    hotels: [],
    restaurants: [],
    attractions: [],
    totalCost: 0,
  });
  
  return (
    <UserInfoContext.Provider
      value={{
        user,
        setUser,
        travelInfo,
        setTravelInfo,
        currentStep,
        setCurrentStep,
        finalChoices,
        setFinalChoices,
        itinerary,
        setItinerary,
        aIGeneratedString,
        setAIGeneratedString,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfoContext = () => useContext(UserInfoContext);
