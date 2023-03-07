import React from "react";

import "./CartProducts.css";
import Button from "./Button";

function CartProducts() {
  return (
    <div className="productsContainer">
      <img
        style={{ width: "50vh", height: "40vh" }}
        src="images/MatkaFul.jpg"
      />
      <div className="infoContainer">
        <div className="productTitle">A Beautiful Art Painting</div>
        <div className="button">
        <div>Price: $299</div>
          <Button class="button__text" name="Remove Item" />
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
