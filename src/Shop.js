import React from 'react'
import Card from './Components/Card/Card'
import "./Shop.css"
import shopItems from"./shopItems.json"


function Shop() {
  return (
    <>
    <div className='shopContainer'>
      {shopItems.map((item, index) => (
        <Card 
        key={index}
        image={item.image}
        title={item.title}
        alt={item.alt}
        />
      ))}

      
    
    </div>
    </>
      
  )
}

export default Shop