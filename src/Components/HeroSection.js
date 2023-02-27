import React from "react";

import Button from "./Button";
import heroImage from "./../Images/moon.jpg";

import "./HeroSection.css";

function HeroSection({text}) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <h1 className="heroText">{text}</h1>
          <Button class={"button__primary"} name={"Explore"} />
        </div>
        <img src={heroImage} alt="Moonlight" width="400" height="300" />
      </div>
    </>
  );
}

export default HeroSection;
