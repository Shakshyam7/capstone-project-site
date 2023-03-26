import React from "react";

import Button from "../Buttons/Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <h1 className="heroText">{props.text}</h1>
          <div>
            <Button className={"button__primary"} name={"Explore"} />
          </div>
        </div>
        <div className="heroImageContainer">

        <img src={"images/moon.jpg"} alt="Moonlight" width="400" height="300" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
