import "./Card.css";
import { FiWind } from "react-icons/fi";
import {
  BiDownArrow,
  BiUpArrow,
  BiCloud,
  BiWater,
  BiSun,
} from "react-icons/bi";

function Card({ title, value, change_val, change_val_direction, icon_type }) {
  function getIcon(type) {
    switch (type) {
      case "wind":
        return <FiWind fontSize={"35px"} color="#0351aa" />;
      case "humidity":
        return <BiCloud fontSize={"35px"} color="#0351aa" />;
      case "pressure":
        return <BiWater fontSize={"35px"} color="#0351aa" />;
      case "uv":
        return <BiSun fontSize={"35px"} color="#0351aa" />;
      default:
        return "";
    }
  }

  return (
    <div className="card-wrapper">
      {getIcon(icon_type)}
      <div className="card-content">
        <div className="card-title-container">
          <span className="card-title">{title}</span>
        </div>
        <div className="card-values">
          <div className="card-val">
            <span className="card-val-large">{value}</span>
          </div>
          <div className="card-val-change">
            {change_val_direction === "up" ? (
              <BiUpArrow color="blue" />
            ) : (
              <BiDownArrow color="red" />
            )}

            <span className="card-val-change-p">{change_val}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
