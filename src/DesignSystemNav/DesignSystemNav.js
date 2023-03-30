import React from "react";
import { Link } from "react-router-dom";

import "./DesignSystemNav.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function DesignSystemNav() {
  return (
    <>
      <div className="dnavbar-container">
        <div className="dtitle">Design System</div>
        <div className="site-linkContainer">
          <Link to="/home" className="site-link">
            Go to Site
          </Link>
        </div>
        <div className="socialIconsContainer">
          <div className="social-icon">
            <FaGithub />
          </div>
          <div className="social-icon">
            <FaLinkedin />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignSystemNav;
