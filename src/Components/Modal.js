import React from "react";
import { useState } from "react";
import "./Modal.css";

import RedForest from "./../Images/RedForest.jpeg";
import Me from "./../Images/Me.jpg";
import Button from "./Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HiOutlineX } from "react-icons/hi";

function Modal({ image, title, alt, price, artist, onClick }) {
  const [click, setClick] = useState(false);
  // const { sharedState, onStateChange } = props;
  // function handleClick(){
  //   console.log(sharedState);
  //   onStateChange(!sharedState);
  //   console.log(sharedState);

  // }

  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="closeIcon">{<HiOutlineX onClick={onClick} />}</div>
          <div className="modalItemsContainer">
            <div className="image-profileContainer">
              <img
                className="modalImage"
                src={image}
                width="80%"
                height="70%"
                alt={alt}
              />
              <div className="profileContainer">
                <img src={Me} className="profileImage"></img>
                <p className="profileName">{artist}</p>
              </div>
            </div>
            <div className="modaltextContainer">
              <p className="modelTitle">{title}</p>
              <p className="modelDescription">Price: {price}</p>

              <div className="buttonsContainer">
                <div>
                  <Button class="button__primary" name={"Add to Cart"} />
                </div>
                <div className="favButton" onClick={() => setClick(!click)}>
                  {click ? (
                    <FavoriteIcon
                      sx={{ fontSize: 50, color: "rgba(209, 81, 111, 0.87)" }}
                    />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 50, color: ")" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
