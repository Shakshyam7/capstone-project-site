import React from "react";

import AppForm from "./Components/AppForm";
import contact from "./Images/contact.jpg";

import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="imageContainer">
        <img src={contact} width="50%" alt="Vector image for contact us page" />
      </div>
      <div className="appFormContainer">
        <div className="contactText">
           <cont>Contact Us</cont>
          <p className="para"> We would love to speal with you </p>
          <p className="para"> Feel free to reach out using the below details.</p>
           <getn>Get In touch</getn>
          <p className="para"> Phone: +17783475839 <br>
          </br></p>
        </div>

        <div className="appFormContainer">
          <AppForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
