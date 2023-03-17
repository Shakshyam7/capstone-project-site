const modalCode = `
import React from "react";
import { useState } from "react";
import "./Modal.css";

import Button from "../Buttons/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HiOutlineX } from "react-icons/hi";

function Modal({ image, title, alt, price, artist, artistImage, onClick }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="closeIcon">{<HiOutlineX onClick={onClick} />}</div>
          <div className="modalItemsContainer">
            <div className="image-profileContainer">
              <img
                className="modalImage"
                src={image}
                width="80%"
                height="70%"
                alt={alt}
              />
              <div className="profileContainer">
                <div className="profileImageContainer">
                  <img
                    src={artistImage}
                    alt="artist"
                    className="profileImage"
                  ></img>
                </div>
                <div className="profileNameContainer">
                  <p className="profileName">{artist}</p>
                  <Button className={"button__text"} name={"Follow"} />
                </div>
              </div>
            </div>
            <div className="modaltextContainer">
              <p className="modelTitle">{title}</p>
              <p className="modelDescription">Price: {price}</p>

              <div className="buttonsContainer">
                <div>
                  <Button className="button__primary" name={"Add to Cart"} />
                </div>
                <div className="favButton" onClick={() => setClick(!click)}>
                  {click ? (
                    <FavoriteIcon
                      sx={{ fontSize: 40, color: "rgba(209, 81, 111, 0.87)" }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ fontSize: 40, color: "#212529" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;


`
const modalCSS = `
.modal {
    position: fixed; 
    z-index: 99; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.37); 
  }
  
  .modalContainer {
    background-color: #EEEEEE;
    position: relative;
    margin: 10% auto;
    padding: 80px 24px 24px 48px;
    width: 80%; 
    z-index: 99;
  
  }
  
  .modalItemsContainer {
    display: flex;
    padding-top: 24px;
  
  
  }
  
  .image-profileContainer {
    flex: 1.5;
    width: 100%;
  }
  
  .modalImage {
    cursor: pointer;
    box-shadow: 10px 10px 15px grey;
  }
  .profileContainer {
    display: flex;
    margin-top: 24px;
    width: 80%;
    cursor: pointer;
  
  }
  .profileImage {
    height: 70px;
    width: 70px;
    border-radius: 35px;
  }
  
  .profileNameContainer{
    margin-left: 24px;
  }
  .profileName {
    font-size: 1.2rem;
  }
  .profileFollow{
    font-size: 14px;
    font-weight: 500;
  }
  
  .modaltextContainer{
    flex: 1.2;
  }
  
  .modelTitle {
    font-size: 2rem;
    font-weight: 500;
    color:rgba(0, 0, 0, 0.87)
  }
  .modelDescription {
    margin-top: 100px;
    font-size: 1rem;
    font-weight: 500;
    color:rgba(0, 0, 0, 0.8)
  }
  .buttonsContainer{
    display: flex;
    margin-top: 24px;
    gap: 56px;
  }
  
  .favButton{
    background-color: #dddddd;
    padding: 8px 8px 4px 8px;
    color: #212529;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
    margin-top: -8px;
  }
  
  .closeIcon {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 24px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
  
  }
  
  @media screen and (max-width: 840px)  {
   
    .modalItemsContainer {
      display: flex;
      flex-direction: column;
      
    }
    .modalContainer {
      background-color: #EEEEEE;
      position: relative;
      margin: 25% 0% 0% 0%;
      padding: 48px 100px 0px 50px;
      height: 100%;
      width: 100%; 
     
  
    }
  .image-profileContainer {
    flex: 1;
    width: 70%;
    text-align: center;
    
  }
  .profileContainer {
    width: 100%;
  
  }
    .modalImage {
    width: 100%;
    height:300px;
      
    }
  
    .modelTitle {
      margin-top: 24px;
      font-size: 1.2rem;
    
    }
    .modelDescription {
      margin-top: 10px;
    }
    .buttonsContainer{
      margin: 24px 0px;
      justify-content: flex-start;
    
  }
  }
  
  @media screen and (max-width: 500px)  {
    .modalContainer {
      background-color: #EEEEEE;
      position: relative;
      margin: 25% 0% 0% 0%;
      padding: 48px 12px 0px 12px;
      height: 100%;
      width: 100%; 
  
    }
    .image-profileContainer {
      flex: 1;
      width: 100%;
    }
   
  }

`

export {modalCode, modalCSS};