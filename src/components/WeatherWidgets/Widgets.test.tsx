// DashboardContainer.test.tsx
import { render, screen } from '@testing-library/react';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import '@testing-library/jest-dom/extend-expect';
import { WeatherResponse } from '../../types/weatherTypes'

describe('Dashboard Widgets', () => {
    const mockWeatherData: Partial<WeatherResponse> = {
      main: { humidity: 54, feels_like: 295.15, temp: 65 },
      sys: { sunrise: 1660566000, sunset: 1660612800 },
      wind: { speed: 4.63, deg: 180 },
      rain: { '1h': 0.5, '3h': 1 },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    }; 
  
    beforeEach(() => {
      render(<DashboardContainer weatherData={mockWeatherData} />);
    });

    it('displays the humidity widget', () => {
      const humidityLabel = screen.getByText(/Humidity/i);
      expect(humidityLabel).toBeInTheDocument();
    });
  
    it('displays the feels like widget', () => {
      const feelsLikeLabel = screen.getByText(/Feels Like/i);
      expect(feelsLikeLabel).toBeInTheDocument();
    });
  
    it('displays the sunrise and sunset widget', () => {
        const sunriseLabels = screen.getAllByText(/Sunrise/i);
        expect(sunriseLabels[0]).toBeInTheDocument(); 
      });      
  
    it('displays the wind widget', () => {
      const windLabel = screen.getByText(/Wind/i);
      expect(windLabel).toBeInTheDocument();
    });
  
    it('displays the rainfall widget', () => {
      const rainfallLabel = screen.getByText(/Rainfall/i);
      expect(rainfallLabel).toBeInTheDocument();
    });
});
