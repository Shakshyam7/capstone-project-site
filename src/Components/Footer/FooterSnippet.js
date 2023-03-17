const footerCode = `
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
          Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;

`

const footerCSS =`
.footerContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    background-color: #030303;
    padding: 24px;
    align-items: center;
    justify-content: space-evenly;
}

.footerLogo{
    font-size: 2rem;
    color: #D1516F;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: 540;
}
.socialIcons{
    display: flex;
    gap: 32px;
    color: rgb(255, 255, 255, 0.7);
    font-size: 2rem;
    cursor: pointer;

}
.icon:hover{
    color: rgb(255, 255, 255, 0.87);
}
.copyrightText{
    color: rgb(255, 255, 255, 0.87);
    text-align: center;
}
`

export {footerCode, footerCSS}