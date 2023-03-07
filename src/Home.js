import React, { useState } from "react";

import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card/Card";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import ArtistPainting from "./Images/artist-painting.jpg";
import PaintingHerself from "./Images/painting herself.jpg";
import She from "./Images/she.jpg";
import Newsletter from "./Components/Newsletter";
import cardItems from "./cardItems.json"


function Home() {
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setShowContent(!showContent);
    setSelectedItem(item);
  };

  console.log(showContent);
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
              onClick={() => handleClick(item)}
            />
          ))}
          {showContent && (
            <Modal
              image={selectedItem.image}
              title={selectedItem.title}
              alt={selectedItem.alt}
              price = {selectedItem.price}
              artist = {selectedItem.artist}
              artistImage = {selectedItem.artistImage}
              onClick={() => setShowContent(false)}
            />
          )}
        </div>
      </div>
      <div className="text2">
        <div className="textContent">
          We make customized art for You and your house and ship to your house
          without any fees.
        </div>
        <Button class={"button__primary"} name={"Contact Us"} />
      </div>
      <div
        style={{ width: "100%", height: 1, border: "1px solid #212529" }}
      ></div>
      <div className="exert">
        "Art is not what u see but What You Make Other See
      </div>
      <div className="artistContainer">
        <div className="image1Container">
          <img className="image1" src={ArtistPainting} />
        </div>
        <div className="image2Container">
          <img className="image2" src={PaintingHerself} />
        </div>
        <div className="image3Container">
          <img className="image3" src={She} />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Home;
