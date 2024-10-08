export interface Attraction {
  name: string;
  description: string;
  location: {
    city: string;
    country: string;
  };
  category: string;
  imageUrl: string;
  recommendedVisitTime: string;
  popularityScore: number;
  openingHours: {
    open: string;
    close: string;
  };
  entryFee: number;
}

export interface Flight {
  id: string;
  airline: string;
  duration: string;
  departure: string;
  arrival: string;
  stops: number;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
}

export interface TravelInfo {
  budget: number;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  numberOfPeople: number;
}

export interface TravelInputFieldProps {
  id: string;
  label: string;
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

export interface UserChoice {
  flights: Flight[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  attractions: Attraction[];
  totalCost: number;
}
