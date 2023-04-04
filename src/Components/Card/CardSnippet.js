const cardCode = `
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
`


const cardCSS = `
.card__container {
position: relative;
width: 25%;
overflow: hidden;
border-radius: 4px;
}

.wishlist__logo{
position: absolute;
background-color: rgb(255, 255, 255,0.87);
top: 12px;
left: 215px;
z-index: 1;
font-size: 2rem;
border-radius: 8px;
padding: 4px 12px 8px 12px;
cursor: pointer; 
}

.card__image{
position: relative;
z-index: 0;
cursor: pointer;
box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.3);
transition: all 0.4s ease-in-out;
mix-blend-mode: luminosity;
  


}

.card__image:hover {
mix-blend-mode: normal;
transform: scale(1.2);

}




`;
export { cardCode, cardCSS };
