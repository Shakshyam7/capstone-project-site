import React from "react";
import "./Cart.css";

import CartProducts from "./Components/CartProducts";
import { useCart } from "react-use-cart";
import Button from "./Components/Button";

function Cart() {
  const { items, isEmpty, removeItem } = useCart();

  return (
    <>
      <div className="cartContainer">
        {isEmpty ? (
          <>
            <div className="emptyPage">
              <div className="cartPageTitle">Your cart is empty</div>
                <Button
                  className={"button__primary"}
                  name={"Continue Shopping"}
                />
            </div>
          </>
        ) : 
        (<>

         { items.map((item) => (
            <CartProducts
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              alt = {item.alt}
              onClick={() => removeItem(item.id)}
            />
          ))
         }
        </> )}

        
      </div>
    </>
  );
}

export default Cart;
