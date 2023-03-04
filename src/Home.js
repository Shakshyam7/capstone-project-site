import React, { useState } from "react";

import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card/Card";
import Flower from "./Images/ful.jpg";
import Hilo from "./Images/hilo.jpg";
import Serenity from "./Images/serenity.jpeg";
import Pond from "./Images/pond.jpeg";
import RedForest from "./Images/RedForest.jpeg";
import Ship from "./Images/ship.jpg";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import ArtistPainting from "./Images/artist-painting.jpg"
import PaintingHerself from "./Images/painting herself.jpg"
import She from "./Images/she.jpg"

const cardItems = [
  {
    image: Flower,
    alt: "Paining of Flower hanging int the Wall",
    title: "Flower by my side",
  },
  {
    image: Serenity,
    alt: "Paining of Flower hanging int the Wall",
    title: "Leaves Scattered in Pond",
  },
  {
    image: Pond,
    alt: "Paining of Flower hanging int the Wall",
    title: "A Quite FullMoon Night",
  },
  {
    image: RedForest,
    alt: "Paining of Flower hanging int the Wall",
    title: "Walking by the Red Forest",
  },
  {
    image: Hilo,
    alt: "Paining of Flower hanging int the Wall",
    title: "Leaves Scattered in Pond",
  },
  {
    image: Ship,
    alt: "Paining of Flower hanging int the Wall",
    title: "A Quite FullMoon Night",
  },
];

function Home() {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    console.log(showContent);
    setShowContent(!showContent);
    console.log(showContent);
  };
  return (
    <div className="homeContainer">
      <HeroSection
        text={
          "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
        }
      />
      <div className="imgviewContainer">
        <heading className="text">
          Explore Arts from Creative and talented Artists
        </heading>
        <div className="cardContainer">
          {cardItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              alt={item.alt}
              onClick={() => handleClick()}
            />
          ))}
          {showContent && (
            <Modal sharedState={showContent} onStateChange={handleClick} />
          )}
        </div>
      </div>
      <div className="text2">
        <div className="textContent">
          We make customized art for You and your house and ship to your house
          with out any fees.
        </div>
        <Button class={"button__primary"} name={"Contact Us"} />
      </div>
      <div className="exert">
        "Art is not what u see but What You Make Other See
      </div>
      <div className="imageContainer">       
      <img style = {{ height: '500px', objectFit: "fill"}} src = {ArtistPainting}/>
      <img style = {{ height: '500px', objectFit: "fill"}} src = {PaintingHerself}/>
      <img style = {{ height: '500px', objectFit: "fill"}} src = {She}/>
      </div>
    </div>
  );
}

export default Home;
