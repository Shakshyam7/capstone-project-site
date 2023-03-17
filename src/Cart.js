import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

import CartProducts from "./Components/CartProducts/CartProducts";
import Footer from "./Components/Footer/Footer";
import { useCart } from "react-use-cart";
import Button from "./Components/Buttons/Button";

function Cart() {
  const { items, isEmpty, totalItems, removeItem } = useCart();

  return (
    <>
      <div className="cartContainer">
        {isEmpty ? (
          <>
            <div className="emptyPage">
              <div className="cartPageTitle">Your cart is empty!</div>
              <Link to="/shop">
              <Button
                className={"button__primary"}
                name={"Continue Shopping"}
              />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="cartPageItemTitle">
              Add {totalItems} Stunning Art to your Collection.
            </div>

            {items.map((item) => (
              <CartProducts
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                alt={item.alt}
                onClick={() => removeItem(item.id)}
              />
            ))}
            <div style={{ height: "1px", backgroundColor: "black" }}></div>
          </>
        )}
        {!isEmpty && (
          <div className="checkoutButtonContainer">
            <button className="checkoutButton">Checkout</button>
          </div>
        )}
      </div>
      <div className="homeFooterContainer">
        <Footer />
      </div>
    </>
  );
}

export default Cart;
