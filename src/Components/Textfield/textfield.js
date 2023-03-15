import React from "react";
import "./textfield.css";

function textfield({name, text, className,type, property, placeholder}) {
  return (
    <>
      <div className="textfield__container">
        {text && <label className={name}>{text}</label>}
        <input
          className={className}
          type={type}
          disabled={property}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default textfield;
