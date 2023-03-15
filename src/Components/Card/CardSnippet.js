const cardCode = `
import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import "./Card.css";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);
  return (
    <>
      <div className="card__container">
        <img
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
`;

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
