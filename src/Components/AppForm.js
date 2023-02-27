import React from "react";
import Textfield from "./textfield";
import Button from "./Button";
import "./AppForm.css";

function AppForm() {
  return (
    <>
      <div className="form__container">
        <div className="form__header">
          <p className = "formText">Fill out the form below and leave us a messege!</p>

          <div className="form__text1">
            <Textfield
              name={"label__textfield"}
              class={"textfield"}
              placeholder={"Firstname"}
            />
            <Textfield
              name={"label__textfield"}
              class={"textfield"}
              placeholder={"Lastname"}
            />
          </div>
          <div className="form__text2">
            <Textfield
              name={"label__textfield"}
              class={"textfield"}
              placeholder={"Email"}
            />
          </div>
          <div className="form__text2">
            <Textfield
              name={"label__textfield"}
              class={"textfield"}
              placeholder={"Number"}
            />
          </div>
          <div className="form__text3">
            <textarea
              className="label__textarea"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="button__send">
            <Button class={"button__primary"} name={"Send"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppForm;
