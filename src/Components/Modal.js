import React from "react";
import { useState } from "react";
import "./Modal.css";

import RedForest from "./../Images/RedForest.jpeg";
import Me from "./../Images/Me.jpg";
import Button from "./Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HiOutlineX } from "react-icons/hi";

function Modal(props) {
  const [click, setClick] = useState(false);
  // const [displayModal, setDisplayModal] = useState("block");
  const { sharedState, onStateChange } = props;
  function handleClick(){
    console.log(sharedState);
    onStateChange(!sharedState);
    console.log(sharedState);

  }

  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="closeIcon" >
            { <HiOutlineX onClick={()=>handleClick()}/>}
          </div>
          <div className="modalItemsContainer">
            <div className="image-profileContainer">
              <img
                className="modalImage"
                src={RedForest}
                width="80%"
                height="70%"
                alt="A wall art of forest in red color"
              />
              <div className="profileContainer">
                <img src={Me} className="profileImage"></img>
                <p className="profileName">Shakshyam Sapkota</p>
              </div>
            </div>
            <div className="modaltextContainer">
              <p className="modelTitle">Walking in Red Forest</p>
              <p className="modelDescription">Price: $900</p>

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
