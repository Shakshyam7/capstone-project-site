import React from "react";
import { Link } from "react-router-dom";

import Button from "../Buttons/Button";
import "./HeroSection.css";

function HeroSection({text, link, src}) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <h1 className="heroText">{text}</h1>

          <div>
            <Link to={link}>
              <Button className={"button__primary"} name={"Explore"} />
            </Link>
          </div>
        </div>
        <div className="heroImageContainer">
          <img
            src={src}
            alt="Moonlight"
            width="400"
            height="300"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
