import "./widget.css"

interface WindProps {
  speed: number;
  direction: number;
}

const Wind: React.FC<WindProps> = ({ speed, direction }) => {
  const getWindDirection = (deg: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <div className="widget-container">
      <h4 className="widget-title">Wind</h4>
      <p className="widget-data">{speed} km/h</p>
      <p className="widget-subtext">Direction: {getWindDirection(direction)}</p>
    </div>
  );
};

export default Wind;
