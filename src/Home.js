import React from "react";
import HeroSection from "./Components/HeroSection";
import "./Home.css";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="homeContainer">
      <HeroSection
        text={
          "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
        }
      />
      <h2 className="text">Explore Arts from Creative and talented Artists</h2>
    </div>
  );
}

export default Home;
