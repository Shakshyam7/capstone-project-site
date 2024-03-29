import React from "react";
import "./Newsletter.css";
import Textfield from "../Textfield/textfield";
import Button from "../Buttons/Button";

function Newsletter() {
  return (
    <div className="ncontainer">
      <div className="ntitle">Newsletter</div>
      <div className="ntext">
        Leave us your email to receive the latest updates from our talented
        artists.
      </div>
      <div className="ntbContainer">
        <Textfield className={"textfield"} type={""} placeholder={"Email"} />
        <Button className="button__primary" name="Send" />
      </div>
    </div>
  );
}

export default Newsletter;
