import React from "react";

import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card/Card";
import Flower from "./Images/ful.jpg";
import Hilo from "./Images/hilo.jpg";
import Serenity from "./Images/serenity.jpeg";
import Pond from "./Images/pond.jpeg";
import RedForest from "./Images/Red Forest.jpeg";
import Ship from "./Images/ship.jpg";
import Button from "./Components/Button";

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
    title: "Flower by my side",
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
  return (
    <div className="homeContainer">
      <HeroSection
        text={
          "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
        }
      />
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
          />
        ))}
        <div className="text2">
          <div>
            We make customized art for You and your house abd ship to your house
            with out any fees.
          </div>
          <Button class = {"button__primary"} name = {"Contact Us"}  />
        </div>
      </div>
    </div>
  );
}

export default Home;
