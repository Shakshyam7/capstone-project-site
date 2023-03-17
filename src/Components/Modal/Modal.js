import React from "react";
import { useState } from "react";
import "./Modal.css";

import Button from "../Buttons/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HiOutlineX } from "react-icons/hi";

function Modal({ image, title, alt, price, artist, artistImage, onClick }) {
  const [click, setClick] = useState(false);
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
                <div className="profileImageContainer">
                  <img src={artistImage} alt = "artist" className="profileImage"></img>
                </div>
                <div className="profileNameContainer">
                  <p className="profileName">{artist}</p>
                  <Button className = {"button__text"} name={"Follow"}/>
                </div>
              </div>
            </div>
            <div className="modaltextContainer">
              <p className="modelTitle">{title}</p>
              <p className="modelDescription">Price: {price}</p>

              <div className="buttonsContainer">
                <div>
                  <Button className="button__primary" name={"Add to Cart"} />
                </div>
                <div className="favButton" onClick={() => setClick(!click)}>
                  {click ? (
                    <FavoriteIcon
                      sx={{ fontSize: 40, color: "rgba(209, 81, 111, 0.87)" }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ fontSize: 40, color: "#212529" }}
                    />
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
