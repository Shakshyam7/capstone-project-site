import React from "react";

import "./SelectionBox.css";

function selectionBox(props) {
  return (
    <>
      <div className="box__container">
        <input type={props.type} className={"selectionBox"} />
        <label className={"label"}>{props.name}</label>
      </div>
    </>
  );
}

export default selectionBox;
