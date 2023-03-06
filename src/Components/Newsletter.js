import React from "react";
import "./Newsletter.css";
import Textfield from "./textfield";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="ncontainer">
        <div className = "ntitle">Newsletter</div>
        <div className = "ntext">Leave your email to receive latest arts update from our talented artist </div>
        <div>       
        <Textfield class = {"textfield"} type = {""} placeholder = {"Email"}/>
        <Button class = "button__primary" name = "Send"/>
        </div>
    </div>
  );
}

export default Newsletter;
