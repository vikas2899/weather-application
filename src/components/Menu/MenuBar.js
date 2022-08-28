import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import "./MenuBar.css";
import logo from "../../logo.png";

function MenuBar() {
  return (
    <div className="menu-bar-wrapper">
      <div className="menu-logo">
        <img src={logo} alt="weather-icon" />
      </div>
      <div className="menu-controls-wrapper">
        <ul>
          <li className="menu-control">
            <Link to="/" className="menu-control">
              <span>
                <BiHomeSmile fontSize={"25px"} />
              </span>
              <span className="menu-control-text">Dashboard</span>
            </Link>
          </li>
          <li className="menu-control">
            <Link to="/about" className="menu-control">
              <span>
                <IoMdContact fontSize={"25px"} />
              </span>
              <span className="menu-control-text">About</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
