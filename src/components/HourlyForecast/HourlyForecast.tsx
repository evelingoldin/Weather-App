import { useEffect, useState } from "react";
import { fetchHourlyForecast } from "../../../api/weatherAPI";
import './HourlyForecast.css'

interface HourlyForecastProps {
  lat: number;
  lon: number;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ lat, lon }) => {
  const [hourlyData, setHourlyData] = useState<any[]>([]);

  useEffect(() => {
    const getHourlyData = async () => {
      try {
        const data = await fetchHourlyForecast(lat, lon);
        setHourlyData(data.list); 
      } catch (error) {
        console.error("Error fetching hourly forecast data:", error);
      }
    };

    getHourlyData();
  }, [lat, lon]);

  return (
    <>
      <div className="forecast-header"></div>
      <div className="hourly-forecast-container">
        {hourlyData.map((hour) => (
          <div key={hour.dt} className="hour-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric' })}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather?.[0]?.icon}@2x.png`}
              alt={hour.weather?.[0]?.description}
            />
            <p>{Math.round((hour.main.temp - 273.15) * 9 / 5 + 32)}°</p> {/* Convert from Kelvin to Fahrenheit */}
            <p>{Math.round(hour.pop * 100)}%</p> 
          </div>
        ))}
      </div>
    </>
  );
};

export default HourlyForecast;
