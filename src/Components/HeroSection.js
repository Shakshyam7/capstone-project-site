import React from "react";
import Button from "./Button";

import "./HeroSection.css";

function HeroSection({ text, image }) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <heroTitle className="heroText">{text}</heroTitle>
          <div className="buttonContainer">
            <Button class={"button__primary"} name={"Explore"} />
          </div>
        </div>
        <img src={image} alt="Moonlight" width="400" height="300" />
      </div>
    </>
  );
}

export default HeroSection;
