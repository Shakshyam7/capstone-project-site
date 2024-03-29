import React from "react";
import "./Button.css";

function Button({ name, onClick, className }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </>
  );
}

export default Button;
