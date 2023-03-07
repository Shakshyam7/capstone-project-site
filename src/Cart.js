import React from "react";
import "./Cart.css";

import CartProducts from "./Components/CartProducts";
import { CartProvider, useCart } from "react-use-cart";


function Cart() {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return (
    <>
    <div className="cartContainer">
    
      <CartProducts />

    </div>
    </>
  )
}

export default Cart;
