import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import WeatherHeader from './WeatherHeader';

describe('WeatherHeader', () => {
  it('displays the location, temperature, and description correctly', () => {
    render(
      <MemoryRouter>
        <WeatherHeader locationName="Los Angeles" temperature={72} description="Clear Sky" />
      </MemoryRouter>
    );

    expect(screen.getByText('Los Angeles')).toBeInTheDocument();
    expect(screen.getByText('72°')).toBeInTheDocument();
    expect(screen.getByText('Clear Sky')).toBeInTheDocument();
  });

  it('renders the back button correctly', () => {
    render(
      <MemoryRouter>
        <WeatherHeader locationName="Los Angeles" temperature={72} description="Clear Sky" />
      </MemoryRouter>
    );

    expect(screen.getByText('Back to Search')).toBeInTheDocument();
  });
});

