import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import "./Card.css";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);
  return (
    <>
      <div className="card__container">
        <img className="card__image"
          src={props.Image}
          alt={props.Alt}
          width=" 350px"
          height="378px"
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleHover()}
        />
        {isHovered && (
          <div className="wishlist__logo">
            <MdFavoriteBorder />
          </div>
        )}
      </div>
    </>
  );
}

export default Card;