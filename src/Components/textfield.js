import React from "react";
import "./textfield.css";

function textfield(props) {
  return (
    <>
      <div className="textfield__container">
        <label className={props.name}>{props.text}</label>
        <input
          className={props.class}
          type={props.type}
          disabled={props.property}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}

export default textfield;
