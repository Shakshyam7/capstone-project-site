import React from "react";

import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card/Card";
import Flower from "./Images/ful.jpg";
import Hilo from "./Images/hilo.jpg";
import Moon from "./Images/moon.jpg"

const cardItems = [
  {
    image: Flower,
    alt: "Paining of Flower hanging int the Wall",
    title: "Flower by my side",
  },
  {
    image: Hilo,
    alt: "Paining of Flower hanging int the Wall",
    title: "Flower by my side",
  },
  {
    image: Moon,
    alt: "Paining of Flower hanging int the Wall",
    title: "Flower by my side",
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
      <h2 className="text">Explore Arts from Creative and talented Artists</h2>
      <div className="cardContainer">
         { cardItems.map((item, index) => (
        <Card key = {index} image = {item.image}
        title = {item.title} alt = {item.alt}
         />))}
    
      </div>
    </div>
  );
}

export default Home;
