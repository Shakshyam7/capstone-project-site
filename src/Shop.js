import React from "react";
import Card from "./Components/Card/Card";
import "./Shop.css";
import shopItems from "./shopItems.json";
import { useState } from "react";
import Modal from "./Components/Modal";

function Shop() {
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setShowContent(!showContent);
    setSelectedItem(item);
  };
  return (
    <>
      <div className="shopContainer">
        {shopItems.map((item, index) => (
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
            price={selectedItem.price}
            artist={selectedItem.artist}
            artistImage={selectedItem.artistImage}
            onClick={() => setShowContent(false)}
          />
        )}
      </div>
    </>
  );
}

export default Shop;
