import { useSelector } from "react-redux";

import { WiSunrise, WiSunset } from "react-icons/wi";
import "./Astronomy.css";

function Astronomy() {
  const astronomyDetails = useSelector((state) => {
    if (state.astronomy.loading) {
      return "Loading...";
    } else {
      return state.astronomy.data;
    }
  });

  const getDateTimeDifference = (value) => {
    let [valueHr, valueMIn] = value.split(":");
    let currTime = new Date().getHours();
    valueHr = parseInt(valueHr);
    if (valueMIn.split(" ")[1] === "PM") {
      valueHr += 12;
    }
    let noOfHrsToDisplay = currTime - valueHr;
    if (noOfHrsToDisplay > 0) {
      return `${noOfHrsToDisplay} hrs ago`;
    } else {
      return `in ${-1 * noOfHrsToDisplay} hrs`;
    }
  };

  return (
    <div className="astronomy-card-wrapper">
      {astronomyDetails.location !== undefined ? (
        <>
          <div className="astronomy-card-title">Sunrise & Sunset</div>
          <div className="astronomy-card-row">
            <div className="astronomy-card-col">
              <WiSunrise fontSize={"50px"} color="#ffca85" />
              <div className="astronomy-card-col-content">
                <span className="astronomy-card-text title">Sunrise</span>
                <span className="astronomy-card-text time">
                  {astronomyDetails.astronomy.astro.sunrise}
                </span>
              </div>
            </div>
            <div className="astronomy-card-col">
              <span className="astronomy-card-text">
                {getDateTimeDifference(
                  astronomyDetails.astronomy.astro.sunrise
                )}
              </span>
            </div>
          </div>
          <div className="astronomy-card-row">
            <div className="astronomy-card-col">
              <WiSunset fontSize={"50px"} color="#ffca85" />
              <div className="astronomy-card-col-content">
                <span className="astronomy-card-text title">Sunset</span>
                <span className="astronomy-card-text time">
                  {astronomyDetails.astronomy.astro.sunset}
                </span>
              </div>
            </div>
            <div className="astronomy-card-col">
              <span className="astronomy-card-text">
                {getDateTimeDifference(astronomyDetails.astronomy.astro.sunset)}
              </span>
            </div>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Astronomy;
