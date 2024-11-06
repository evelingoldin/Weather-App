
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeatherByCity } from "../../api/weatherAPI";
import "./Home.css";

interface Location {
  name: string;
  temperature: number;
  description: string;
  high: number;
  low: number;
}

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedLocations = localStorage.getItem("savedCities");
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      try {
        const data = await fetchWeatherByCity(city);
        const kelvinToFahrenheit = (kelvin: number) => Math.round((kelvin - 273.15) * 9/5 + 32);
  
        const newLocation: Location = {
          name: data.name || "Unknown Location",
          temperature: kelvinToFahrenheit(data.main?.temp ?? 273.15), 
          description: data.weather?.[0]?.description || "No description available",
          high: kelvinToFahrenheit(data.main?.temp_max ?? 273.15),
          low: kelvinToFahrenheit(data.main?.temp_min ?? 273.15),
        };
  
        const updatedLocations = [...locations, newLocation];
        setLocations(updatedLocations);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };
  

  const handleLocationClick = async (location: Location) => {
    try {
      const weatherData = await fetchWeatherByCity(location.name);
      navigate("/weather", { state: { weatherData } });
    } catch (error) {
      console.error("Error fetching weather data for navigation:", error);
    }
  };

  const handleDeleteCity = (cityName: string) => {
    const updatedLocations = locations.filter((location) => location.name !== cityName);
    setLocations(updatedLocations);
    localStorage.setItem("savedCities", JSON.stringify(updatedLocations));
  };

  return (
    <div className="home-container">
      <h1>Weather</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city"
          className="city-input"
        />
        <button type="submit" className="search-button">Add</button>
      </form>
      <div className="location-list">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-item"
            onClick={() => handleLocationClick(location)}
          >
            <button
              className="delete-button"
              onClick={(e) => { e.stopPropagation(); handleDeleteCity(location.name); }}
            >
              Delete
            </button>
            <div className="location-info">
              <h2>{location.name}</h2>
              <p>{location.description}</p>
            </div>
            <div className="temperature-info">
              <span>{location.temperature}°</span>
              <p>H: {location.high}° | L: {location.low}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
