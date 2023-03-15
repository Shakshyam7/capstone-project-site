const heroSectionCode = `
import React from "react";

import Button from "../Buttons/Button";
import heroImage from "./../Images/moon.jpg";

import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <h1>{props.text}</h1>
          <Button class={"button__primary"} name={"Explore"} />
          <Button class={"button__text"} name={"View"} />
        </div>
        <img src={heroImage} alt="Moonlight" width="400" height="300" />
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
