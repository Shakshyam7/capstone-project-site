import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import "./Card.css";

function Card({image, alt, title, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);

  return (
    <>
      <div className="card__container" onClick={onClick}>
        <img className="card__image"
          src={image}
          alt={alt}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleHover()}
        />
        
          <div className="wishlist__logo">
            <MdFavoriteBorder />
          </div>
        
          <p className="title">{title}</p>
          
      </div>
    </>
  );
}

export default Card;