import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import './Navbar.css';
import { useCart } from "react-use-cart";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const {totalUniqueItems} = useCart()
  return (
    <>  
      <nav className = 'nav'>
        
          <div className = 'nav__logo'>
            <Link to ='/' className='nav__logo-link'>
              ArtShop
            </Link>   
          </div>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <HiOutlineX/> : <HiOutlineMenu />}
          </div>

          <div  className={ click ? "nav__menu-active" : "nav__menu-container"}>
            <ul className='nav__menu'>
              <li className='nav__menu-item'>
                <Link to = '/home' className='nav__menu-link' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav__menu-item'>
                <Link to = '/shop' className='nav__menu-link' onClick={closeMobileMenu}>
                  Shop
                </Link>
              </li>
              <li className='nav__menu-item'>
                <Link to = '/contact' className='nav__menu-link' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className='nav__menu-item--cart'>
                <Link to = '/cart' className='nav__menu-link--cart' onClick={closeMobileMenu}>
                  Cart({totalUniqueItems})
                </Link>
              </li>
            </ul>
          </div>

        <div className='nav__cart' >
          <Link to = '/cart' className='nav__cart-link' >
            Cart({totalUniqueItems})
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar