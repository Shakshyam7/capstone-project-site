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
      <Footer />

    </div>
  );
}

export default Home;
