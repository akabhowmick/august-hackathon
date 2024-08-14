import axios from "axios";

export const getRecommendations = async (userPreferences: string) => {
  const prompt = `Based on these preferences: ${userPreferences}, suggest a flight and hotel.`;
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
      },
    }
  );

  return response.data.choices[0].text;
};
