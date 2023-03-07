import React from 'react'

import "./CartProducts.css"
import Button from './Button'

function CartProducts() {
  return (
    <div className='productsContainer'>
        <img style = {{width: "50vh", height: "40vh"}}src = "images/MatkaFul.jpg"/>
        <div className='productTitle'>
        <p className='productTitle'>A beautiful Art Painting</p>
        </div>
        <Button class = "button__text" name = "Remove Item"/>
    </div>
  )
}

export default CartProducts