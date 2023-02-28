import React from "react";
import "./Modal.css";


import RedForest from "./../Images/RedForest.jpeg"
import Me from "./../Images/Me.jpg" 

function Modal() {
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <img src = {RedForest}width = "60%"height= "40%" />
          <div className="profileContainer">
          <img src = {Me} className="profileImage"></img>
          <p>This is a modal.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

