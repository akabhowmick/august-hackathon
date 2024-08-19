# Vacation Planning API

This website provides a vacation planning application, allowing users to fetch information about hotels, restaurants, attractions, and flights. 

Frontend: A user interface where users input their preferences and interact with the AI chatbox.

Backend: Handles user input, interacts with AI models, and fetches data from external APIs for flights, hotels, restaurants, and activities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)

## Features

- Fetch hotel options
- Fetch restaurant options
- Fetch attractions
- Fetch flight options

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/akabhowmick/august-hackathon.git
cd august-hackathon
```

2. Install dependencies:

## Configuration

1. Create a .env file in the root directory:
2. Add the required environment variables to the .env file:

```
EXTERNAL_HOTEL_API_URL=https://example.com/api/hotels
EXTERNAL_RESTAURANT_API_URL=https://example.com/api/restaurants
EXTERNAL_ATTRACTIONS_API_URL=https://example.com/api/attractions
EXTERNAL_FLIGHT_API_URL=https://example.com/api/flights
PORT=5050
```

Replace the example URLs with the actual URLs for the APIs you are integrating with. 3. Add API keys for OpenAI and the other APIs

##Running the Project

1. Run the frontend

```
cd FrontEnd
npm run dev
```

2. Spin up the backend on a separate terminal

```
cd server
npm start
```


## Future Features
1. Upgrade frontend to https://aka-codes-vacation-planner.b12sites.com/index#home 
2. Replace mock data with API data 