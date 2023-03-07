import React from "react";
import { useState } from "react";

import Card from "./Components/Card/Card";
import "./Shop.css";
import Modal from "./Components/Modal";
import shopItems from "./shopItems.json";
import { CartProvider, useCart } from "react-use-cart";

function Shop() {

  const { addItem} = useCart()
  
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
