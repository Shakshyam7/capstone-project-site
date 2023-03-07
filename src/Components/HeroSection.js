import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import "./HeroSection.css";

function HeroSection({ text, image }) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <heroTitle className="heroText">{text}</heroTitle>
          <div className="buttonContainer">
            <Link to="./shop">
              <Button className={"button__primary"} name={"Explore"} />
            </Link>
          </div>
        </div>
        <img src={image} alt="Moonlight" width="400" height="300" />
      </div>
    </>
  );
}

export default HeroSection;
