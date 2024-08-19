import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

const EXTERNAL_FLIGHT_API_URL = 'https://example.com/api/flights';

// @route   GET /api/flights
// @desc    Get flights from an external API
// @access  Public
router.get('/', async (req: Request, res: Response) => {
    const options = {
        method: 'GET',
        url: EXTERNAL_FLIGHT_API_URL,
        params: {
          fromEntityId: 'YUL',
          toEntityId: 'ABJ',
          yearMonth: '2024-07'
        },
        headers: {
          'x-rapidapi-key': 'enter your API key',
          'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        console.log(response); 
        res.json(response.data);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error fetching flights:', err.message);
            res.status(500).send('Server Error');
        } else {
            console.error('Unknown error:', err);
            res.status(500).send('Unknown Server Error');
        }
    }
});

export default router;
