import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumbs.css"

function Breadcrumbs() {
  return (
    <div className = "breadcrumbs__container">
      <ul className="breadcrumbs__list">
        <Link to="#"><li className="breadCrumps__item">Home</li></Link>
        <span> {">"} </span>
        <Link to="#"><li className="breadCrumps__item">Contact</li></Link>
        <span> {">"} </span>
        <Link to="#"><li className="breadCrumps__item">Shop</li></Link>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
