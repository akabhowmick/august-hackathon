// src/server/src/routes/chat.ts
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        // TODO: replace
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).send("Error processing your request.");
  }
});

export default router;
