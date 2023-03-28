import React from "react";
import "./textfield.css";

function textfield({name, text, className, ...otherprops }) {
  return (
    <>
      <div className="textfield__container">
        {text && <label className={name}>{text}</label>}
        <input
          className={className}
          {...otherprops}  
        />
      </div>
    </>
  );
}

export default textfield;
