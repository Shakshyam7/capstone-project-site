import React from "react";
import "./Modal.css";


import RedForest from "./../Images/RedForest.jpeg"
import Me from "./../Images/Me.jpg" 
import Button from "./Button";

function Modal() {
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <img src = {RedForest}width = "60%"height= "40%" />
          <div className="profileContainer">
          <img src = {Me} className="profileImage"></img>
          <p className="profileName">Shakshyam Sapkota</p>
          </div>
        </div>
        <div>
          <Button class = "button__primary" name = {"Add to Cart"} />
        </div>
      </div>
    </>
  );
}

export default Modal;

