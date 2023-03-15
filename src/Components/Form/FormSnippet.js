const formCode = `
import React from "react";
import Textfield from "../Textfield/textfield";
import Button from "../Buttons/Button";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="form__container">
        <div className="form__header">
          <h6>Fill out the form below and leave us a messege!</h6>

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
            <Button class={"button__primary"} name={"SEND"} />
          </div>
        </div>
      </div>
    </>
  );
}
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
