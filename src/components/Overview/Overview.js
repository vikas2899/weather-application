import { useSelector } from "react-redux";
import Card from "../../utils/Card/Card";
import { ImNewTab } from "react-icons/im";
import "./Overview.css";

function Overview() {
  const weatherDetails = useSelector((state) => {
    if (state.weather.loading) {
      return "Loading...";
    } else {
      return state.weather.data;
    }
  });

  return (
    <div className="overview-container">
      <div className="overview-title-container">
        <span className="overview-title">Today Overview</span>
        <span className="overview-title">
          Forecast <ImNewTab />
        </span>
      </div>
      {weatherDetails.location !== undefined ? (
        <>
          <div className="overview-row">
            <Card
              title="Wind Speed"
              value={`${weatherDetails.current.wind_kph} km/h`}
              change_val="2km/h"
              icon_type="wind"
            />
            <Card
              title="Humidity"
              value={`${weatherDetails.current.humidity} %`}
              change_val="10%"
              change_val_direction="up"
              icon_type="humidity"
            />
          </div>
          <div className="overview-row">
            <Card
              title="Pressure"
              value={`${weatherDetails.current.pressure_mb} hPA`}
              change_val="20hPa"
              change_val_direction="up"
              icon_type="pressure"
            />
            <Card
              title="UV"
              value={`${weatherDetails.current.uv.toFixed(1)}`}
              change_val="0.3"
              icon_type="uv"
            />
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Overview;
