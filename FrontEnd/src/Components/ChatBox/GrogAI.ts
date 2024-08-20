import Groq from "groq-sdk";
import { Flight, Hotel, Restaurant, Attraction } from "../../types/interfaces";
import { generatePrompt } from "./OpenAIApi";

const groq = new Groq({
  apiKey: "Your API KEY", // insert API key here for testing purposes but for future security reasons better to put it in as a .env variable
  dangerouslyAllowBrowser: true,
});

export const getGroqChatCompletion = async ({
  promptHelper,
}: {
  promptHelper: {
    flights: Flight[];
    hotels: Hotel[];
    restaurants: Restaurant[];
    attractions: Attraction[];
    budget: number;
    startDate: string;
    endDate: string;
    numberOfPeople: number;
  };
}) => {
  const { flights, hotels, restaurants, attractions, budget, startDate, endDate, numberOfPeople } =
    promptHelper;
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: generatePrompt(
          flights,
          hotels,
          restaurants,
          attractions,
          budget,
          startDate,
          endDate,
          numberOfPeople
        ),
      },
    ],
    model: "llama3-8b-8192",
  });
};

export const extractAndParseJSON = (inputString: string) => {
  try {
    // Find the JSON part of the string
    const jsonStartIndex = inputString.indexOf("{");
    const jsonEndIndex = inputString.lastIndexOf("}");

    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      // Extract the JSON substring
      const jsonString = inputString.substring(jsonStartIndex, jsonEndIndex + 1);

      // Parse the JSON string to an object
      const parsedObject = JSON.parse(jsonString);

      // Example: Accessing relevant information
      const flights: string = parsedObject.flights;
      const hotel: string = parsedObject.hotel;
      const itinerary: {
        day: string;
        activities: string[];
      }[] = parsedObject.itinerary;
      const budgetBreakdown: {
        item: string;
        cost: string;
      }[] = parsedObject.budgetBreakdown;
      const totalCost: string = parsedObject.totalCost;

      return {
        flights,
        hotel,
        itinerary,
        budgetBreakdown,
        totalCost,
      };
    } else {
      throw new Error("No valid JSON found in the input string.");
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

export const parseItineraryString = (input: string) => {
  const flightsMatch = input.match(/\*\*Flights\*\*\n\n([\s\S]*?)\n\n\*\*Hotel\*\*/);
  const hotelMatch = input.match(/\*\*Hotel\*\*\n\n([\s\S]*?)\n\n\*\*Itinerary\*\*/);
  const itineraryMatch = input.match(/\*\*Itinerary\*\*\n\n([\s\S]*?)\n\n\*\*Budget Breakdown\*\*/);
  const budgetMatch = input.match(/\*\*Budget Breakdown\*\*\n\n([\s\S]*?)(?=\n*Total:|\n*$)/);

  const flights = flightsMatch ? flightsMatch[1].trim() : "";
  const hotel = hotelMatch ? hotelMatch[1].trim() : "";

  const itinerary = itineraryMatch
    ? itineraryMatch[1]
        .trim()
        .split(/Day \d+ \([^)]+\): [^\n]+\n/)
        .filter(Boolean)
        .map((dayBlock, index) => {
          const [dayTitle] =
            itineraryMatch[1].match(new RegExp(`Day ${index + 1} \\([^)]+\\): [^\n]+`, "g")) || [];
          const activities = dayBlock
            .split("\n")
            .filter((line) => line.trim())
            .map((activity) => activity.trim());
          return {
            day: dayTitle || `Day ${index + 1}`,
            activities,
          };
        })
    : [];

  const budgetBreakdown = budgetMatch
    ? budgetMatch[1]
        .trim()
        .split("\n")
        .map((line) => {
          const [item, cost] = line.split(":").map((part) => part.trim());
          return { item, cost };
        })
    : [];

  const totalCostMatch = input.match(/Total:\s*\$[\d,]+/);
  const totalCost = totalCostMatch ? totalCostMatch[0].replace("Total: ", "").trim() : "";

  return {
    flights,
    hotel,
    itinerary,
    budgetBreakdown,
    totalCost,
  };
};
