import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();


const EXTERNAL_ATTRACTIONS_API_URL = "https://example.com/api/attractions";

// @route   GET /api/attractions
// @desc    Get attractions from an external API
// @access  Public
router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(EXTERNAL_ATTRACTIONS_API_URL);
    res.json(response.data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching attractions:", err.message);
      res.status(500).send("Server Error");
    } else {
      console.error("Unknown error:", err);
      res.status(500).send("Unknown Server Error");
    }
  }
});

export default router;
