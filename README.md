<<<<<<< HEAD
# Weather-App

## Project Overview
This Weather App is a production-level, mobile-first React application that displays weather information based on a user-provided location. Optimized for mobile devices, the app fetches current weather and 3-hour-interval forecast data from the OpenWeather API.

## Architecture Decision
Given the scope of this project, I chose not to implement a backend using NestJS. With only two API calls to handle and minimal backend logic that simply passes through API data without extensive processing, adding a NestJS server would have introduced unnecessary complexity without significant performance benefits. Instead, I focused on building a clean, responsive React app with direct API calls, client-side caching, and robust error handling to deliver a production-level user experience. This approach keeps the project lightweight and allows for easy future enhancements directly within the React codebase. Also, if the scope expands, a NestJS backend can be added on at a later time. 

## Technologies Used
- React
- Node.js
- Axios: For making HTTP requests to the weather API.
- LocalStorage Caching: Used to cache API responses and reduce redundant calls.
- Vite: Development environment optimized for fast builds and local development.
- Vitest: Chosen for its seamless integration with Vite, offering faster performance and minimal configuration for a streamlined testing setup in this Vite-based project.

## Features
- Weather Search by City: Displays current weather and forecast information for a user-input location.
- Caching Strategy: API responses are cached in local storage to reduce API calls, with separate expiration times for each data type.
- Error Handling: The app handles network errors gracefully and provides logs for debugging.
- Environment Variables: Sensitive data like API keys are managed using environment variables for better security and flexibility.
- Animations based on weather (clear and rain implemented)

## Setup Instructions
To run this project locally, follow these steps:

1. Clone the Repository
```
git clone https://github.com/your-username/Weather-App.git
cd Weather-App
```
2. Install Dependencies:

`npm install`

3. Set Up Environment Variables: Create a `.env` file in the root of the project to store the API key and base URL. You can use the following structure:

```
VITE_API_KEY=your_openweather_api_key
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
```

4. Replace `your_openweather_api_key` with your actual OpenWeather API key.

## Run the Application

- Start the development server using Vite:

`npm run dev`

## Open in Browser

- Once the server is running, open http://localhost:5173 in your browser to view the application.
=======











>>>>>>> c331d69 ((WeatherApp): Created new weather app utilizing the OpenWeather API)
