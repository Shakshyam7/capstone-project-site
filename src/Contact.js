import React, { useEffect } from "react";

import AppForm from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";

import "./Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us";
    document.description = "Reach to us for any inqueries"
  }, []);
  return (
    <>
      <div className="imageContainer">
        <img
          src={"images/contact.jpg"}
          width="50%"
          alt="A lady answering calls and emails."
        />
      </div>
      <div className="appFormContainer">
        <div className="contactText">
          <cont className="cont">Contact Us</cont>
          <p className="para"> We would love to speak with you. </p>
          <p className="para">
            Feel free to reach out using the below details.
          </p>
          <p className="tit">Get In touch</p>
          <p className="para"> Phone: +17783475839</p>
        </div>

        <AppForm />
      </div>
      <div className="homeFooterContainer">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
