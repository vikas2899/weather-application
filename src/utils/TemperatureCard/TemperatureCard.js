import { useSelector } from "react-redux";
import "./TemperatureCard.css";

function TemperatureCard() {
  const weatherDetails = useSelector((state) => {
    if (state.weather.loading) {
      return "Loading...";
    } else {
      return state.weather.data;
    }
  });

  return (
    <div className="temperature-card-wrapper">
      {weatherDetails.location !== undefined ? (
        <>
          <div className="location-time-wrapper">
            <div className="location-wrapper">
              <div>
                <span className="card-text card-location-title">
                  {weatherDetails.location.name}
                </span>
              </div>
              <div>
                <span className="card-text card-location-text">
                  {`${weatherDetails.location.region}, ${weatherDetails.location.country}`}
                </span>
              </div>
            </div>
            <div className="time-wrapper">
              <span className="card-text">
                {weatherDetails.location.localtime.split(" ")[1]}
              </span>
            </div>
          </div>
          <div className="temperature-wrapper">
            <div className="location-wrapper">
              <div>
                <span className="card-text card-temperature-value">
                  {weatherDetails.current.temp_c}° C
                </span>
              </div>
              <div>
                <span className="card-text card-location-text">
                  {weatherDetails.current.condition.text}
                </span>
              </div>
            </div>
            <div className="time-wrapper">
              <img
                src={weatherDetails.current.condition.icon}
                alt="condition-icon"
              />
            </div>
          </div>
        </>
      ) : (
        <span className="card-text card-location-text">Loading...</span>
      )}
    </div>
  );
}

export default TemperatureCard;
