import React from "react";

import AppForm from "./Components/AppForm";
import contact from "./images/contact.jpg";

import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="imageContainer">
        <img src={contact} width="50%" alt = "A lady answering calls and emails " />
      </div>
      <div className="appFormContainer">
        <div className="contactText">
           <cont className="cont">Contact Us</cont>
          <p className="para"> We would love to speak with you. </p>
          <p className="para"> Feel free to reach out using the below details.</p>
          <p className = "tit">Get In touch</p>
          <p className="para"> Phone: +17783475839</p>
        </div>

          <AppForm />
      </div>
    </>
  );
}

export default Contact;
