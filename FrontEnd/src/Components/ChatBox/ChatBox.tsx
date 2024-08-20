import React, { useState } from "react";

import axios from "axios";
import { useHotelContext } from "../../providers/HotelProvider";
import { useFlightContext } from "../../providers/FlightProvider";
import { useRestaurantContext } from "../../providers/RestaurantProvider";
import { useAttractionContext } from "../../providers/AttractionProvider";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { getGroqChatCompletion } from "./GrogAI";

export const Chatbox: React.FC = () => {
  const { flights } = useFlightContext();
  const { hotels } = useHotelContext();
  const { restaurants } = useRestaurantContext();
  const { attractions } = useAttractionContext();
  const { travelInfo, setCurrentStep, setAIGeneratedString } = useUserInfoContext();
  const { budget, startDate, endDate, numberOfPeople } = travelInfo;
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const promptHelper = {
    flights,
    hotels,
    restaurants,
    attractions,
    budget,
    startDate,
    endDate,
    numberOfPeople,
  };

  async function generateItineraryGrogAI() {
    const chatCompletion = await getGroqChatCompletion({ promptHelper }); 
    setAIGeneratedString(chatCompletion.choices[0]?.message?.content || "");
    setCurrentStep("AIFinalSummary");
  }

  const handleSend = async () => {
    setMessages([...messages, `User: ${input}`]);
    const response = await axios.post("/chat", { message: input });
    setMessages([...messages, `User: ${input}`, `AI: ${response.data.reply}`]);
    setInput("");
  };

  return (
    <div>
      <button onClick={generateItineraryGrogAI} className="bg-red-500 text-white p-2 rounded-md">
        Get Vacation AI to Generate Itinerary!
      </button>
      <div>
        User Messages:
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <label htmlFor="AIChatMessage">Enter your queries here</label>
      <input
        id="AIChatMessage"
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 my-2 rounded-md hover:bg-indigo-700"
        onClick={handleSend}
      >
        Send to Vacation Planner AI!
      </button>
    </div>
  );
};
