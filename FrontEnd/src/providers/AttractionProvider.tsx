import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Attraction } from "../types/interfaces";
import { attractionsData } from "../MockData/mockAttractions";
import { useUserInfoContext } from "./UserInfoProvider";

interface AttractionContextType {
  attractions: Attraction[];
  setAttractions: React.Dispatch<React.SetStateAction<Attraction[]>>;
}

const AttractionContext = createContext<AttractionContextType>({} as AttractionContextType);

export const AttractionProvider = ({ children }: { children: ReactNode }) => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  const { currentStep } = useUserInfoContext();

  useEffect(() => {
    setAttractions(attractionsData);
  }, [currentStep]);

  // Fetch attractions on initial render and on every step change in UserInfoProvider
  // useEffect(() => {
  //   axios
  //     .get("/api/attractions")
  //     .then((response) => setAttractions(response.data))
  //     .catch((error) => console.error("Error fetching attractions:", error));
  // }, []);

  return (
    <AttractionContext.Provider
      value={{
        attractions,
        setAttractions,
      }}
    >
      {children}
    </AttractionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAttractionContext = () => useContext(AttractionContext);
