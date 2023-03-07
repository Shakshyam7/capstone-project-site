import React from "react";
import "./Cart.css";

import CartProducts from "./Components/CartProducts";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const { items, isEmpty, totalUniqueItems, updateItemQuantity, removeItem } =
    useCart();
  return (
    <>
      <div className="cartContainer">
        {items.map((item, index) => (
          <CartProducts
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
