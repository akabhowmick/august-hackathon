import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

// const EXTERNAL_HOTEL_API_URL = "https://example.com/api/hotels";

const options = {
  method: "GET",
  url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
  params: {
    pageNumber: "1",
    currencyCode: "USD",
  },
  headers: {
    "x-rapidapi-key": "7102454959msh770337f56eaeab0p17734djsn5c461c2c8430",
    "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
  },
};

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching hotels:", err.message);
      res.status(500).send("Server Error");
    } else {
      console.error("Unknown error:", err);
      res.status(500).send("Unknown Server Error");
    }
  }
});

export default router;
