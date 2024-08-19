import { useState, createContext, useContext, ReactNode } from "react";
import { TravelInfo, UserChoice } from "../types/interfaces";

interface User {
  id: string;
  name: string;
  email: string;
}

type AllowedValues = "initialUserInfo" | "AIChatting" | "FinalSummary";

interface UserInfoContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  travelInfo: TravelInfo;
  setTravelInfo: React.Dispatch<React.SetStateAction<TravelInfo>>;
  currentStep: AllowedValues;
  setCurrentStep: React.Dispatch<React.SetStateAction<AllowedValues>>;
  finalChoices: UserChoice;
  setFinalChoices: React.Dispatch<React.SetStateAction<UserChoice>>;
}

const UserInfoContext = createContext<UserInfoContextType>({} as UserInfoContextType);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [travelInfo, setTravelInfo] = useState<TravelInfo>({
    budget: 0,
    startDate: "",
    endDate: "",
    startLocation: "",
    endLocation: "",
    numberOfPeople: 0,
  });
  const [currentStep, setCurrentStep] = useState<AllowedValues>("initialUserInfo");
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
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfoContext = () => useContext(UserInfoContext);
