import React from "react";
import { Link } from "react-router-dom";

import "./DesignSystemNav.css";


function DesignSystemNav() {
  return (
    <>
      <div className="dnavbar-container">
        <div className="dtitle">Design System</div>
        <div className="site-linkContainer"> 
          <Link to="/home" className="site-link">Go to Site</Link>
        </div>
      </div>
    </>
  );
}

export default DesignSystemNav;
