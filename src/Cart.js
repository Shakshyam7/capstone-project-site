import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "./Components/Buttons/Button";
import CartProducts from "./Components/CartProducts/CartProducts";
import Footer from "./Components/Footer/Footer";
import { useCart } from "react-use-cart";
import "./Cart.css";

function Cart() {
  const { items, isEmpty, removeItem } = useCart();
  useEffect(() => {
    document.title = "Cart - Add beautiful arts in your collection";
  }, []);
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
            <h1 className="cartPageItemTitle">
              Add Stunning Art to your Collection.
            </h1>

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
