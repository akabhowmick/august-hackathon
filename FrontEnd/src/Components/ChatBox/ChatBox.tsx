import React, { useState } from "react";
import axios from "axios";

export const Chatbox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    setMessages([...messages, `User: ${input}`]);
    const response = await axios.post("/chat", { message: input });
    setMessages([...messages, `User: ${input}`, `AI: ${response.data.reply}`]);
    setInput("");
  };

  return (
    <div>
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
        Send
      </button>
    </div>
  );
};
