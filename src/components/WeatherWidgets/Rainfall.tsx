interface RainfallProps {
  amount: number;
  description: string;
}

const Rainfall: React.FC<RainfallProps> = ({ amount, description }) => {
  return (
    <div className="widget-container">
      <h4 className="widget-title">Rainfall</h4>
      <div className="widget-data">{amount > 0 ? `${amount} mm` : description}</div>
      <p className="widget-subtext">
        {amount > 0 ? "In the last hour" : "No recent rainfall"}
      </p>
    </div>
  );
};

export default Rainfall;
