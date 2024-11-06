interface HumidityProps {
  humidity: number;
}

const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
  // Calculate the left position of the indicator based on humidity (0-100 scale)
  const calculateLeftPosition = (humidity: number) => {
    const percentage = Math.min(humidity, 100);
    return `${percentage}%`;
  };

  return (
    <div className="widget-container humidity-widget">
      <h4 className="widget-title">Humidity</h4>
      <div className="widget-data">{humidity}%</div>
      <p className="widget-subtext">
        {humidity < 30 ? 'Low' : humidity < 60 ? 'Moderate' : 'High'}
      </p>
      <div className="humidity-status-bar">
        <div
          className="humidity-indicator"
          style={{ left: calculateLeftPosition(humidity) }}
        ></div>
      </div>
    </div>
  );
};

export default Humidity;
