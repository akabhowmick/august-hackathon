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
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
