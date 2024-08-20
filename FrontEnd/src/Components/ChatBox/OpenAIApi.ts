import { Flight, Hotel, Restaurant, Attraction } from "../../types/interfaces";

export function generatePrompt(
  flights: Flight[],
  hotels: Hotel[],
  restaurants: Restaurant[],
  attractions: Attraction[],
  budget: number,
  startDate: string,
  endDate: string,
  numberOfPeople: number
) {
  const prompt = `
  You are a travel assistant. Please create an itinerary for a trip based on the following options:

  - Budget: $${budget}
  - Start Date: ${startDate}
  - End Date: ${endDate}
  - Number of People: ${numberOfPeople}

  Here are the available options:

  Flights: ${JSON.stringify(flights)}
  Hotels: ${JSON.stringify(hotels)}
  Restaurants: ${JSON.stringify(restaurants)}
  Attractions: ${JSON.stringify(attractions)}

  Select the most suitable options for a balanced, enjoyable itinerary, considering the budget and preferences. As a return value please return so that it is possible to parse the string as JSON to then easily display it in a separate tsx component that has the following type {flights: string;
    hotel: string;
    itinerary: {
        day: string;
        activities: string[];
    }[];
    budgetBreakdown: {
        item: string;
        cost: string;
    }[];
    totalCost: string;}. Please do not return anything else other than the string that can be converted to JSON.
  `;
  return prompt;
}
