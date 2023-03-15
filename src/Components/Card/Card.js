import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import "./Card.css";

function Card({ image, alt, title, onClick }) {
  return (
    <>
      <div className="card__container" onClick={onClick}>
        <img className="card__image" src={image} alt={alt} />

        <div className="wishlist__logo">
          <MdFavoriteBorder />
        </div>

        <p className="title">{title}</p>
      </div>
    </>
  );
}

export default Card;
