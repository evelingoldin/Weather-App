// src/types/WeatherTypes.ts

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max?: number;
    temp_min?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    "1h": number;
    "3h": number;
  };
  snow?: {
    "1h": number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
  cod: number;

  // Custom properties for DashboardContainer
  uvIndex: number;
  sunrise: number; // Unix timestamp (number)
  sunset: number;  // Unix timestamp (number)
  windSpeed: number;
  windDirection: number;
  rainfall: string;
  humidity: number;
  feels_like: number;
}
