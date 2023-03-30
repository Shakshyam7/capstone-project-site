import React from "react";
import { Link } from "react-router-dom";

import "./DesignSystemNav.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function DesignSystemNav() {
  return (
    <>
      <div className="dnavbar-container">
        <div className="dtitle">Design System</div>
        <div className="icon-siteContainer">
          <div className="site-linkContainer">
            <Link to="/home" className="site-link">
              Go to Site
            </Link>
          </div>
          <div className="socialIconsContainer">
            <a  href="https://github.com/Shakshyam7/capstone-project-site" className="social-icon">
              <FaGithub />
            </a>
            <a
              href= "https://github.com/Shakshyam7/capstone-project-site"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a  href = "https://www.instagram.com/" className="social-icon">
              <FaInstagram />
            </a >
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignSystemNav;
