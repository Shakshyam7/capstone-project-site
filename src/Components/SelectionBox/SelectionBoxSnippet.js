const selectionBoxCode = `
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


`;

const selectionBoxCSS = `
.box__container {
    display: flex; 
    margin: 12px
     
}


.selectionBox {
    width: 20px;
    height: 20px;
    border: 1px solid #8E98A8;
    border-radius: 10px;
    accent-color: rgba(209, 81, 111, 0.87)
}


.label {
    font-size: 1rem;
    margin-left: 12px;
    position: relative;
    bottom: 2px;
}

`;

export { selectionBoxCode, selectionBoxCSS };
