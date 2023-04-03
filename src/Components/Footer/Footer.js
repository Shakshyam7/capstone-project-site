import React from "react";
import "./Footer.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogo">ArtShop</div>
        <div className="socialIcons">
          <div className="icon">
            <FaFacebook />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
        </div>
        <div className="copyrightText">
          copyright &copy; {new Date().getFullYear()}-ArtShop. All rights
          reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
