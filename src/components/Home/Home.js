import WeatherDetail from "../WeatherDetail/WeatherDetail";
import WeatherSideBar from "../WeatherSideBar/WeatherSideBar";
import MenuBar from "../Menu/MenuBar";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="menu-bar-container">
        <MenuBar />
      </div>
      <div className="weather-detail-container">
        <WeatherDetail />
      </div>
      <div className="weather-sidebar-container">
        <WeatherSideBar />
      </div>
    </div>
  );
}

export default Home;
