import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Card.css";
import { useState } from "react";

function Card({ image, alt, title, onClick }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="card__container" onClick={onClick}>
        <img className="card__image" src={image} alt={alt} />

        <div className="wishlist__logo" onClick={() => setClick(!click)}>
          {click ? (
            <FavoriteIcon
              sx={{ fontSize: 40, color: "rgba(209, 81, 111, 0.87)" }}
            />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 40, color: "#212529" }} />
          )}
        </div>
        <div className="title">{title}</div>
      </div>
    </>
  );
}

export default Card;
