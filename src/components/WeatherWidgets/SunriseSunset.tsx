import "./widget.css";

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({ sunrise, sunset }) => {
  const currentHour = new Date().getHours();

  // Convert Unix timestamp to a readable time format
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sunriseTime = formatTime(sunrise);
  const sunsetTime = formatTime(sunset);

  // Determine whether to emphasize sunrise or sunset
  const sunriseHour = new Date(sunrise * 1000).getHours();
  const sunsetHour = new Date(sunset * 1000).getHours();
  const isCloserToSunset = currentHour >= sunriseHour && currentHour < sunsetHour;

  return (
    <div className="widget-container sunrise-sunset-widget">
      <h4 className="widget-title">Sunrise & Sunset</h4>
      <p className={`sunrise-time ${!isCloserToSunset ? "larger" : ""}`}>
        Sunrise: {sunriseTime}
      </p>
      <p className={`sunset-time ${isCloserToSunset ? "larger" : ""}`}>
        Sunset: {sunsetTime}
      </p>
    </div>
  );
};

export default SunriseSunset;
