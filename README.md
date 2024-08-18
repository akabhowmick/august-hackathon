# Vacation Planning API

This repository provides a backend API for a vacation planning application, allowing users to fetch information about hotels, restaurants, attractions, and flights. The API is built using Node.js, Express, and TypeScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch hotel options
- Fetch restaurant options
- Fetch attractions
- Fetch flight options

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/vacation-planning-api.git
cd vacation-planning-api
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

3. Configuration
   a. Create a .env file in the root directory:
   b. Add the required environment variables to the .env file:

```
bash
EXTERNAL_HOTEL_API_URL=https://example.com/api/hotels
EXTERNAL_RESTAURANT_API_URL=https://example.com/api/restaurants
EXTERNAL_ATTRACTIONS_API_URL=https://example.com/api/attractions
EXTERNAL_FLIGHT_API_URL=https://example.com/api/flights
PORT=5000
```

Replace the example URLs with the actual URLs for the APIs you are integrating with.

4.  Here is the complete markdown text for your README.md:

markdown
Copy code

# Vacation Planning API

This repository provides a backend API for a vacation planning application, allowing users to fetch information about hotels, restaurants, attractions, and flights. The API is built using Node.js, Express, and TypeScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch hotel options
- Fetch restaurant options
- Fetch attractions
- Fetch flight options

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/vacation-planning-api.git
   cd vacation-planning-api
   ```

2. Install dependencies:
```bash
npm install
```
or

```bash
yarn install
```

3. Configuration
Create a .env file in the root directory:

```bash
Copy code
touch .env
```
Add the required environment variables to the .env file:
```
EXTERNAL_HOTEL_API_URL=https://example.com/api/hotels
EXTERNAL_RESTAURANT_API_URL=https://example.com/api/restaurants
EXTERNAL_ATTRACTIONS_API_URL=https://example.com/api/attractions
EXTERNAL_FLIGHT_API_URL=https://example.com/api/flights
PORT=5000
```
Replace the example URLs with the actual URLs for the APIs you are integrating with.

4. Running the Project
   To start the server with nodemon:
```bash
npm start
```
or

```bash
yarn start
```

