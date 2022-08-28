import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedData } from "../../features/weather/weatherSlice";
import { fetchAstronomyData } from "../../features/astronomy/astronomySlice";
import TemperatureCard from "../../utils/TemperatureCard/TemperatureCard";
import Astronomy from "../../utils/Astronomy/Astronomy";
import "./WeatherSideBar.css";

function WeatherSideBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchedData());
    dispatch(fetchAstronomyData());
  });

  return (
    <div className="weather-sidebar-wrapper">
      <TemperatureCard />
      <Astronomy />
    </div>
  );
}

export default WeatherSideBar;
