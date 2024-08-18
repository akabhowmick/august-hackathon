import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

const EXTERNAL_RESTAURANT_API_URL = "https://example.com/api/restaurants";

// @route   GET /api/restaurants
// @desc    Get restaurants from an external API
// @access  Public
router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(EXTERNAL_RESTAURANT_API_URL);
    res.json(response.data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching restaurants:", err.message);
      res.status(500).send("Server Error");
    } else {
      console.error("Unknown error:", err);
      res.status(500).send("Unknown Server Error");
    }
  }
});

export default router;
