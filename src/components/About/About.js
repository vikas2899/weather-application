import MenuBar from "../Menu/MenuBar";
import { BsLinkedin } from "react-icons/bs";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="menu-bar-container">
        <MenuBar />
      </div>
      <div className="about-content-container">
        <div className="about-con">
          <div className="about-title">Designed and Developed by - </div>
          <div className="about-content">
            <span className="a-content"> Vikas Pandey</span>
            <span className="a-content">
              <a href="mailto:vikas1pandey020@gmail.com">
                vikas1pandey020@gmail.com
              </a>
            </span>
            <span className="a-content">
              <BsLinkedin
                size={"25px"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vikas-pandey-8a9349161"
                  )
                }
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
