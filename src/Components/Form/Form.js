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
                placeholder={"Hari"}
                autoComplete={"given-name"}
                text = {"First Name"}

              />
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="text"
                placeholder={"Bahadur"}
                autoComplete={"family-name"}
                text = {"Last Name"}

              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="email"
                placeholder={"haribaharur@gmail.com"}
                autoComplete={"email"}
                text = {"Email"}

              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="tel"
                placeholder={"837-388-9999"}
                autoComplete={"tel"}
                text = {"Phone"}

              />
            </div>
            <div className="form__text3">
              <label className="label-textarea">Message</label>
              <textarea
                className="label__textarea"
                name="message"
                placeholder="Leave us any messgages you have for us."
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
