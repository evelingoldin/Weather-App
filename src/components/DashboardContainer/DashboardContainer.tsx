
import { WeatherResponse } from '../../types/weatherTypes';
import Humidity from '../WeatherWidgets/Humidity'; 
import SunriseSunset from '../WeatherWidgets/SunriseSunset';
import Wind from '../WeatherWidgets/Wind';
import Rainfall from '../WeatherWidgets/Rainfall';
import FeelsLike from '../WeatherWidgets/FeelsLike';
import './DashboardContainer.css';

interface DashboardContainerProps {
  weatherData: Partial<WeatherResponse>;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ weatherData }) => {
  // Check for rain data, falling back to "0" if not present
  const rainAmount = weatherData.rain?.["1h"] ?? weatherData.rain?.["3h"] ?? 0;
  // Check for weather description, falling back to "No rain" if not available
  const rainDescription = weatherData.weather?.[0]?.description || "No rain";

  return (
    <div className="dashboard-container">
      <Humidity humidity={weatherData.main?.humidity ?? 0} />
      <FeelsLike feelsLike={Math.round(((weatherData.main?.feels_like ?? 273.15) - 273.15) * 9/5 + 32)} /> 
      <SunriseSunset sunrise={weatherData.sys?.sunrise ?? 0} sunset={weatherData.sys?.sunset ?? 0} />
      <Wind speed={weatherData.wind?.speed ?? 0} direction={weatherData.wind?.deg ?? 0} />
      <Rainfall amount={rainAmount} description={rainDescription} />
    </div>
  );
};

export default DashboardContainer;
