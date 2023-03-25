import React from "react";

import "./SelectionBox.css";

function selectionBox({ type, label, name  }) {
  return (
    <>
      <div className="box__container">
        <input type={type} className={"selectionBox"} name ={name} />
        <label className={"label"}>{label}</label>
      </div>
    </>
  );
}

export default selectionBox;
