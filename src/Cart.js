import React from "react";
import "./Cart.css";

import CartProducts from "./Components/CartProducts";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const { items, isEmpty, removeItem } =
    useCart();

  return (
    <>
      <div className="cartContainer">
        {isEmpty ? (
          <p className = "cartPageTitle">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <CartProducts
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              onClick={() => removeItem(item.id)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
