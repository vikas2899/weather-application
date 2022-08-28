import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import GoogleMap from "../../utils/Maps/GoogleMap";
import "./WeatherDetail.css";

function WeatherDetail() {
  return (
    <div className="weather-detail-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="overview-wrapper">
        <Overview />
      </div>
      <div className="map-wrapper">
        <GoogleMap />
      </div>
    </div>
  );
}

export default WeatherDetail;
