import React from 'react'
import Card from './Components/Card/Card'
import "./Shop.css"
import shopItems from"./shopItems.json"
import { useState } from 'react'
import Modal from './Components/Modal'


function Shop() {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent(!showContent);
  };
  return (
    <>
    <div className='shopContainer'>
      {shopItems.map((item, index) => (
        <Card 
        key={index}
        image={item.image}
        title={item.title}
        alt={item.alt}
        onClick = {()=>handleClick()}
        />
      ))}
      {showContent && <Modal />}

      
    
    </div>
    </>
      
  )
}

export default Shop