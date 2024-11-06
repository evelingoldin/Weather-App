import axios from "axios";
import { WeatherResponse } from "../src/types/weatherTypes";
import useCache from "../src/utils/useCache";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const cacheKey = `weatherData-city-${city}`;
  const cachedData = useCache.get(cacheKey);

  if (cachedData) {
    return cachedData as WeatherResponse;
  }

  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });

    const data = response.data as WeatherResponse;
    useCache.set(cacheKey, data, { expiryInMinutes: 60 }); 
    return data;
  } catch (error) {
    console.error("Error fetching weather data by city:", error);
    throw error;
  }
};

// Fetch hourly forecast data with moderate cache duration
export const fetchHourlyForecast = async (lat: number, lon: number) => {
  const cacheKey = `hourlyForecast-${lat}-${lon}`;
  const cachedData = useCache.get(cacheKey);

  if (cachedData) {
    console.log("Serving hourly forecast data from cache");
    return cachedData;
  }

  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });

    const data = response.data;
    useCache.set(cacheKey, data, { expiryInMinutes: 60 }); // Cache for 1 hour
    return data;
  } catch (error) {
    console.error("Error fetching hourly forecast data:", error);
    throw error;
  }
};
