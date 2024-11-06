import { useNavigate } from 'react-router-dom';
import './WeatherHeader.css';

interface WeatherHeaderProps {
  locationName: string;
  temperature: number;
  description: string;
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  locationName,
  temperature,
  description,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="weather-header-container">
      <div className="weather-header">
        <div className="location-info">
          <h1 className="location-name">{locationName}</h1>
          <div className="temp-description">
            <span className="temperature">{Math.round(temperature)}°</span>
            <span className="separator">|</span>
            <span className="description">{description}</span>
          </div>
          <button onClick={handleBackClick} className="back-button">
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherHeader;
