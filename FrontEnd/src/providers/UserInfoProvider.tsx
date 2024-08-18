import { useState, createContext, useContext, ReactNode } from "react";
import { TravelInfo } from "../types/interfaces";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserInfoContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  travelInfo: TravelInfo;
  setTravelInfo: React.Dispatch<React.SetStateAction<TravelInfo>>;
}

const UserInfoContext = createContext<UserInfoContextType>({} as UserInfoContextType);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [travelInfo, setTravelInfo] = useState<TravelInfo>({
    budget: 0,
    startDate: "",
    endDate: "",
    location: "",
    numberOfPeople: 0,
  });

  return (
    <UserInfoContext.Provider
      value={{
        user,
        setUser,
        travelInfo,
        setTravelInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfoContext = () => useContext(UserInfoContext);
