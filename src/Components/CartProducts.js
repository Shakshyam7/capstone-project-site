import React from "react";

import "./CartProducts.css";
import Button from "./Button";

function CartProducts() {
  return (
    <div className="productsContainer">
      <div>
        <img className="productImage" src="images/MatkaFul.jpg" />
      </div>

      <div className="infoContainer">
        <div className="productTitle">A Beautiful Art Painting</div>
        <div className="buttonPriceContainer">
          <div className="price">Price: $299</div>
          <Button class="button__text" name="Remove Item" />
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
