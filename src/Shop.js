import React from "react";
import { useState } from "react";

import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import "./Shop.css";
import Modal from "./Components/Modal/Modal";
import shopItems from "./shopItems.json";
import { useCart } from "react-use-cart";

function Shop() {
  const { addItem } = useCart();

  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setShowContent(!showContent);
    setSelectedItem(item);
  };
  return (
    <>
      <div className = "shopPageTitle">Browse Gorgeous Arts from our Collection.</div>
      <div className="shopContainer">
        {shopItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            alt={item.alt}
            onClick={() => {
              handleClick(item);
            }}
          />
        ))}
        {showContent && (
          <Modal
            key={selectedItem.id}
            image={selectedItem.image}
            title={selectedItem.title}
            alt={selectedItem.alt}
            price={selectedItem.price}
            artist={selectedItem.artist}
            artistImage={selectedItem.artistImage}
            onClick={() => {
              setShowContent(false);
              addItem(selectedItem);
            }}
          />
        )}
      </div>
      <div className="homeFooterContainer">
        <Footer />
      </div>
    </>
  );
}

export default Shop;
