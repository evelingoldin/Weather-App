import { useLocation } from "react-router-dom";
import WeatherHeader from "../components/WeatherHeader/WeatherHeader";
import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import './WeatherPage.css';

const getWeatherClass = (description: string) => {
  const lowerCaseDescription = description.toLowerCase();
  if (lowerCaseDescription.includes("clear")) return "weather-clear";
  if (lowerCaseDescription.includes("rain") || lowerCaseDescription.includes("mist")) return "weather-rain";
  return "weather-default";
};


const WeatherPage: React.FC = () => {
  const location = useLocation();
  const { weatherData } = location.state || {};

  if (!weatherData) {
    return <p>No weather data available. Please go back and select a city.</p>;
  }

  const weatherClass = getWeatherClass(weatherData.weather[0].description);

  return (
    <div className={`weather-page ${weatherClass}`}>
      <WeatherHeader
        locationName={weatherData.name}
        temperature={Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32)}
        description={weatherData.weather[0].description}
      />
      
      {weatherData.coord && (
        <HourlyForecast lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
      )}

      <DashboardContainer weatherData={weatherData} />
    </div>
  );
};

export default WeatherPage;