import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

export const AIChatBox = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this **awesome** chat!");
  }, []);

  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message through the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </div>
  );
};

// import { useState } from "react";
// import { Widget, addResponseMessage } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";
// import axios from "axios";

// export const Chatbox = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleNewUserMessage = async (newMessage: string) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "https://api.openai.com/v1/engines/davinci/completions",
//         {
//           prompt: newMessage,
//           max_tokens: 150,
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const reply = response.data.choices[0].text.trim();
//       addResponseMessage(reply);
//     } catch (error) {
//       console.error("Error processing message:", error);
//       addResponseMessage("Sorry, I couldn't process your request.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // const handleNewUserMessage = async (newMessage: string) => {
//   //   setIsLoading(true);
//   //   try {
//   //     const response = await axios.post("/api/chat", { message: newMessage });
//   //     const reply = response.data.reply;
//   //     addResponseMessage(reply);
//   //   } catch (error) {
//   //     addResponseMessage("Sorry, I couldn't process your request.");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   return (
//    //  !isLoading && (
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//         title="Vacation Assistant"
//         subtitle="Ask me anything about vacation planning!"
//       />
//     )
//   );
// };
