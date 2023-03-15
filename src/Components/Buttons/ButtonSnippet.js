const buttonCode = `
import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className={props.class}>{props.name}</button>
    </>
  );
}

export default Button;


`;

const buttonCSS = `
.button__primary {
    padding: 8px 16px;
    gap: 10px;
    background: #D1516F;
    border: 1px solid rgba(209, 81, 111, 0.6);
    border-radius: 9px;
    color: rgba(255, 255, 255, 0.87);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
}

.button__primary:hover {
    background: rgba(209, 81, 111, 0.6);
    transform: translateX(2px);
}

.button__secondary {
    padding: 8px 16px;
    gap: 10px;
    border: 1px solid rgba(209, 81, 111, 0.6);
    border-radius: 9px;
    color: #D1516F;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;



}

.button__secondary:hover {
    background: rgba(255, 152, 176, 0.3);
    transform: translateX(2px);

}

.button__text {
    padding: 8px 16px;
    border: none;
    color: rgba(209, 81, 111, 0.87);
    background-color: transparent;
    transition: all 0.2s ease-in-out;
}

.button__text:hover {
    color: rgba(209, 81, 111, 0.6);
    transform: translateX(2px);


}

`;

export { buttonCode, buttonCSS };
