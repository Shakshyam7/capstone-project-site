import React from "react";
import "./Modal.css";

import RedForest from "./../Images/RedForest.jpeg";
import Me from "./../Images/Me.jpg";
import Button from "./Button";

function Modal() {
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="image-profileContainer">
            <img src={RedForest} width="80%" height="70%" />
            <div className="profileContainer">
              <img src={Me} className="profileImage"></img>
              <p className="profileName">Shakshyam Sapkota</p>
            </div>
          </div>
          <div className="modaltextContainer">
            <p className="modelTitle">Walking in Red Forest</p>
            <Button class="button__primary" name={"Add to Cart"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
