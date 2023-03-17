const navbarCode =`
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
`

const navbarCSS = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .menu-icon {
    display: none;
  }
  
  
  .nav {
    background: #030303;
    width: 100%;
    height: 5rem;
    top: 0;
    display: grid;
    grid-template-columns: 10rem 1fr 2fr 1fr 10rem;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
  .nav__logo {
    display: grid;
    grid-column: 2/3;
    justify-content: start;
    align-items: center;
    font-size: 2rem;
      
  }
  
  .nav__logo-link {
    color: #d1516f;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 540;
    text-decoration: none;
  
  }
  
  .nav__logo-link:hover {
    color: #D1516F;
  }
  
  .nav__menu-container {
    grid-column: 3/4;
    height: 0;
  }
  
  .nav__menu {
    grid-column: 3/4;
    display: flex;
    height: 0;
    justify-content: space-around;
    align-items: center;
    list-style: none;
   
  }
  .nav__menu-link--cart {
    display: none;
  }
  
  
  .nav__menu-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    color: rgb(255, 255, 255, 0.75);
  }
  
  
  .nav__menu-link:hover {
    color:rgb(255, 255, 255, 0.87);
    text-decoration: none;
  }
  
  .nav__menu-link:focus {
    color: rgb(255, 255, 255, 0.87);
    border-bottom: 2px solid rgb(255, 255, 255, 0.87);
    text-decoration: none;
  }
  
  
  
  
  .nav__cart {
    grid-column: 4/5;
    text-align: right;
    text-decoration: none;
  }
  
  .nav__cart-link {
    color: rgb(255, 255, 255, 0.75);
    align-items: center;
    text-decoration: none;
  }
  
  .nav__cart-link:hover {
    color: rgba(255, 255, 255, 0.87);
  }
  
  .nav__cart-link:focus {
    color: rgba(250, 250, 250, 0.87);
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(250, 250, 250, 0.87);
  }
  
  
  .nav__cart-logo {
    font-size: 1.5rem;
    padding-bottom: 6px;
  }
  
  @media screen and (max-width: 960px) {
    .nav {
      height: 5rem;
      display: grid;
      grid-template-columns:   2rem 1fr 2fr 1fr 2rem;
      justify-content: center;
      align-items: center;
    }
  
    .nav__menu-container, .nav__cart{
      display: none;
    }
    
    .menu-icon {
      display: grid;
      grid-column: 4/5;
      color: rgb(255, 255, 255, 0.87);
      font-size: 1.8rem;
      justify-content: right;
      z-index: 5;
      cursor: pointer;
    }
    
    .nav__menu-active {
      width: 100%;
      height: 100%;
      display: block;
      margin-top: 5rem;
      background-color: #060606;
      position: fixed;
      Top: 0;
      left: 0;
      z-index: 999;
      
    }
  
    .nav__menu {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    .nav__menu-item {
      cursor: pointer;
      padding: 2rem;
     text-align: center;
     color: rgba(255, 255, 255, 0.75);
  
  
  
    }
    
    .nav__menu-item:hover {
      color: rgba(255, 255, 255, 0.87);
      border: none;
      text-decoration: none;
    }
  
    .nav__menu-link--cart {
      display: block;
      cursor: pointer;
      padding: 2rem;
      color:rgb(255, 255, 255, 0.75);
      text-decoration: none;
      margin-left: 1rem
    }
    .nav__menu-link--cart:hover {
      text-decoration: none;
      color:rgb(255, 255, 255, 0.87);
    }
    .nav__menu-link:focus {
      border-bottom: none;
    }
  }
  
`

export {navbarCode, navbarCSS}