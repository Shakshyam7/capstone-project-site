const textfieldCode = `
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
`;

const textfieldCSS = `

.textfield__container {
    display: inline-block;
    margin: 12px 20px;

}

.label__textfield {
    font-size: 1rem;
    margin-bottom: 8px;
}



.label__textfield-error {
    display: block;
    font-size: 1rem;
    margin-bottom: 8px;
    color: rgba(202, 4, 4, 0.6);
}

.label__textfield-disabled {
    display: block;
    font-size: 1rem;
    margin-bottom: 8px;
    color: rgb(0, 0, 0, 0.37);
}

.textfield {
    display: block;
    padding: 12px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid rgb(0, 0, 0, 0.60);
    box-sizing: border-box;
}

.textfield:focus {
    border: 2px solid rgb(0, 0, 0, 0.60);
    outline: none;
}

.textfield:disabled {
    display: block;
    padding: 12px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    box-sizing: border-box;
}

.textfield__focus {
    display: block;
    padding: 12px;
    font-size: 1rem;
    border-radius: 4px;
    border: 2px solid rgb(0, 0, 0, 0.60);
    box-sizing: border-box;
}

.textfield__error {
    display: block;
    padding: 12px;
    font-size: 1rem;
    border-radius: 4px;
    border: 2px solid rgba(202, 4, 4, 0.6);
    box-sizing: border-box;
}

`;

export { textfieldCode, textfieldCSS };
