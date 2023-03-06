import React from "react";
import "./Newsletter.css";
import Textfield from "./textfield";

function Newsletter() {
  return (
    <div>
        <div className = "ntitle">Newsletter</div>
        <div className = "ntext">Leave your email to receive latest arts update from our talented artist </div>
        <Textfield class = {"textfield"} type = {""} placeholder = {"Email"}/>
    </div>
  );
}

export default Newsletter;
