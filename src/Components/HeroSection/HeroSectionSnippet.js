const heroSectionCode = `
import React from "react";
import { Link } from "react-router-dom";

import Button from "../Buttons/Button";
import "./HeroSection.css";

function HeroSection({ text, link, src }) {
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
            alt="A Quite Full Moon Night"
            width="400"
            height="300"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;

`;

const heroSectionCSS = `
.heroContainer {
    display: flex;
    justify-content: space-evenly;
    border: 2px solid rgba(245, 245, 245, 1);
    border-radius: 4px;
    background-color: rgba(245, 245, 245, 1);
    padding: 56px;

}

.textContainer {
    display: block;
    flex-wrap: wrap;
    width: 45%;
    height: 50%;
    text-align: center;
}

h1 {

    flex-wrap: wrap;
    font-family: 'Hind';
    font-style: normal;
    font-size: 48px;
    line-height: 85px;
}

.heroContainer img {
    align-items: center;
}

.heroContainer img:hover {
    transition: all 0.5 ease-in-out;
    align-items: center;
    transform: scale(1.05);
}


`;

export { heroSectionCode, heroSectionCSS };
