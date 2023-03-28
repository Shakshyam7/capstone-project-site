import React from "react";
import Textfield from "../Textfield/textfield";
import Button from "../Buttons/Button";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="form__container">
        <div classNameName="form__header">
          <h6 className="formtext">
            Fill out the form below and leave us a messege!
          </h6>
          <div className="formTextInputContainer">
            <div className="form__text1">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="text"
                placeholder={"First Name"}
                autoComplete={"given-name"}
              />
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="text"
                placeholder={"Last Name"}
                autoComplete={"family-name"}
              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="email"
                placeholder={"Email"}
                autoComplete={"email"}
              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="tel"
                placeholder={"Number"}
                autoComplete={"tel"}
              />
            </div>
            <div className="form__text3">
              <textarea
                className="label__textarea"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="button__send">
            <Button className={"button__primary"} name={"SEND"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
