const formCode = `
import React from "react";

import Button from "../Buttons/Button";
import Textfield from "../Textfield/textfield";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="form__container">
        <div classNameName="form__header">
          <h6 className="formtext">
            Fill out the form below to leave us a messege!
          </h6>
          <div className="formTextInputContainer">
            <div className="form__text1">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="text"
                placeholder={"Hari"}
                autoComplete={"given-name"}
                text={"First Name"}
              />
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="text"
                placeholder={"Bahadur"}
                autoComplete={"family-name"}
                text={"Last Name"}
              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="email"
                placeholder={"haribaharur@gmail.com"}
                autoComplete={"email"}
                text={"Email"}
              />
            </div>
            <div className="form__text2">
              <Textfield
                name={"label__textfield"}
                className={"textfield"}
                type="tel"
                placeholder={"837-388-9999"}
                autoComplete={"tel"}
                text={"Phone"}
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
`;


const formCSS = `
.form__container{
    background: linear-gradient(to bottom, #d78799, rgba(245, 245, 245));
    margin: 32px 0px;
    display: inline-block;
}
.form__header {
    margin: 56px;
}

.form__header h6{
    text-align: center;
    color:  rgba(0, 0, 0, 0.87);
                                } 
.label__textarea{
    display: block;
    margin: 12px 20px;
    height: 5rem;
    width: 75%;
    padding: 12px;
    border: 1px solid rgb(0, 0, 0, 0.60);
    border-radius: 4px;
    box-sizing: border-box;
}
.label__textarea:focus{
    border: 2px solid rgb(0, 0, 0, 0.60);
    outline: none;

}

.form__text2 {
    margin-top: -20px;
}

.button__send{
    margin-bottom:  56px;
    text-align: center;

}

`;

export { formCode, formCSS };
