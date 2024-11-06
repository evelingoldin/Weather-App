import './widget.css';

interface FeelsLikeProps {
  feelsLike: number;
}

const FeelsLike: React.FC<FeelsLikeProps> = ({ feelsLike }) => {
  return (
    <div className="widget-container">
      <h4 className="widget-title">Feels Like</h4>
      <p className="widget-data">{Math.round(feelsLike)}°</p>
    </div>
  );
};

export default FeelsLike;
