import React from "react";

import "./CartProducts.css";
import Button from "../Buttons/Button";

function CartProducts({ image, alt, title, price, onClick }) {
  return (
    <div className="productsContainer">
      <div>
        <img className="productImage" alt={alt} src={image} />
      </div>

      <div className="infoContainer">
        <div className="productTitle">{title}</div>
        <div className="buttonPriceContainer">
          <div className="price">Price: {price}</div>
          <Button
            className={"button__text"}
            name="Remove Item"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
