import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { describe, it, expect, vi } from 'vitest';
import HourlyForecast from './HourlyForecast';

// Mock fetch response
global.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        list: [
            { dt: 1, temp: 65, weather: [{ icon: '10d', description: 'rainy' }] },
            { dt: 2, temp: 67, weather: [{ icon: '01d', description: 'clear sky' }] },
        ],
    }),
})
) as unknown as jest.Mock;

describe('HourlyForecast', () => {
  it('renders forecast data after fetching', async () => {
    render(<HourlyForecast lat={34.0522} lon={-118.2437} />);

    await waitFor(() => {
      const forecastItems = screen.getAllByRole('img'); 
      expect(forecastItems.length).toBeGreaterThan(0); 
    });
  });
});
