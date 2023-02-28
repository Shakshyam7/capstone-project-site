import React from "react";
import "./Modal.css";


import RedForest from "./../Images/RedForest.jpeg"

function Modal() {
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <img src = {RedForest}width = "60%"height= "60%" />
          <h2>Heading</h2>
          <p>This is a modal.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;

