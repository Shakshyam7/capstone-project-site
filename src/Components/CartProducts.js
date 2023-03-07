import React from "react";

import "./CartProducts.css";
import Button from "./Button";

function CartProducts({image, title, price}) {
  return (
    <div className="productsContainer">
      <div>
        <img className="productImage" src={image} />
      </div>

      <div className="infoContainer">
        <div className="productTitle">{title}</div>
        <div className="buttonPriceContainer">
          <div className="price">Price: {price}</div>
          <Button class="button__text" name="Remove Item" />
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
