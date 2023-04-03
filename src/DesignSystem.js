import React, { useState, useEffect } from "react";

import Button from "./Components/Buttons/Button.js";
import { buttonCode, buttonCSS } from "./Components/Buttons/ButtonSnippet.js";
import { BiMenuAltLeft } from "react-icons/bi";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs.js";
import Card from "./Components/Card/Card.js";
import { cardCode, cardCSS } from "./Components/Card/CardSnippet.js";
import Colors from "./Components/Colors/Colors.js";
import CodeSnippet from "./Components/CodeSnippet/CodeSnippet.js";
import Footer from "./Components/Footer/Footer.js";
import { footerCode, footerCSS } from "./Components/Footer/FooterSnippet.js";
import Form from "./Components/Form/Form.js";
import { formCode, formCSS } from "./Components/Form/FormSnippet.js";

import HeroSection from "./Components/HeroSection/HeroSection.js";
import {
  heroSectionCSS,
  heroSectionCode,
} from "./Components/HeroSection/HeroSectionSnippet.js";

import { listCode, listCSS } from "./Components/List Group/ListGropsSnippet.js";

import Modal from "./Components/Modal/Modal.js";
import { modalCode, modalCSS } from "./Components/Modal/modalSnippet";
import Navbar from "./Components/Navbar/Navbar.js";
import { navbarCode, navbarCSS } from "./Components/Navbar/NavbarSnippet.js";
import SelectionBox from "./Components/SelectionBox/SelectionBox.js";
import Sidebar from "./Components/Sidebar.js/Sidebar.js";
import {
  selectionBoxCode,
  selectionBoxCSS,
} from "./Components/SelectionBox/SelectionBoxSnippet.js";
import Textfield from "./Components/Textfield/textfield";
import {
  textfieldCode,
  textfieldCSS,
} from "./Components/Textfield/textfieldSnippet.js";
import themeCode from "./Components/Colors/colorSnippet.js";
import Typography from "./Components/Typography/Typography.js";
import { UnorderList, OrderList } from "./Components/List Group/List.js";
import "./DesignSystem.css";

const item = {
  id: "3",
  image: "images/Ratri.jpg",
  alt: "Paining of beautiful pond at night with a moon on the sky.",
  title: "A Quite Pond at Night",
  price: "$400",
  artist: "Ivan Oliver",
  artistImage: "images/Ivan.jpg",
};

function Home() {
  const [click, setClick] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  useEffect(() => {
    document.title = "Design System - Artshop";
  }, []);

  return (
    <>
      <div className="homepageContainer">
        <div className="mobileSidebar">
          {!click && (
            <button
              className="sidebarDisplayButton"
              area-label="Display Sidebar"
              onClick={() => setClick(!click)}
            >
              <BiMenuAltLeft className="sidebutton" />
            </button>
          )}
        </div>
        {click && (
          <div className="mobileSidebarContainer">
            <Sidebar
              sidebarItems={[
                "Navbar",
                "Colors",
                "Typography",
                "Buttons",
                "BreadCrumbs",
                "Textfield",
                "Checkbox/Radio",
                "List",
                "Card",
                "Modal",
                "HeroSection",
                "Form",
                "Footer",
              ]}
              onClick={() => setClick(false)}
            />
          </div>
        )}

        <div className="homepageSidebarContainer">
          <Sidebar
            sidebarItems={[
              "Navbar",
              "Colors",
              "Typography",
              "Buttons",
              "Textfield",
              "BreadCrumbs",
              "List",
              "Checkbox/Radio",
              "Card",
              "Modal",
              "HeroSection",
              "Form",
              "Footer",
            ]}
          />
        </div>
        <div className="homepageContent">
          <h2 className="heading" id="navbar">
            Navbar
          </h2>
          <div className="designNavbarContainer">
            <Navbar />
          </div>
          <CodeSnippet code={navbarCode} css={navbarCSS} />

          <h2 className="heading" id="colors">
            Colors
          </h2>
          <div className="homeColorContainer">
            <Colors />
          </div>
          <CodeSnippet code={themeCode} />
          <h2 className="heading" id="typography">
            Typography
          </h2>
          <div className="typeContainer">
            <Typography />
          </div>
          <h2 className="heading" id="buttons">
            Buttons
          </h2>
          <div className="button__container" id="buttons">
            <Button name={"Button-P"} className={"button__primary"} />

            <Button name={"Button-S"} className={"button__secondary"} />

            <Button name={"Button-T"} className={"button__text"} />
          </div>

          <CodeSnippet code={buttonCode} css={buttonCSS} />

          <h2 className="heading" id="breadcrumbs">
            Breadcrumbs
          </h2>
          <div className="componentContainer">
            <Breadcrumbs />
          </div>
          <h2 className="heading" id="textfield">
            Textfield
          </h2>
          <div className="homeTextfieldContainer">
            <Textfield
              name={"label__textfield"}
              className={"textfield"}
              text={"Textfield"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield"}
              className={"textfield__focus"}
              text={"Textfield Active"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield-error"}
              className={"textfield__error"}
              text={"Textfield Error"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield"}
              className={"textfield"}
              disabled={"true"}
              text={"Textfield Disabled"}
              type={"text"}
            />
          </div>

          <CodeSnippet code={textfieldCode} css={textfieldCSS} />

          <h2 className="heading" id="checkbox/radio">
            Checkbox/Radio button
          </h2>
          <div className="componentContainer">
            <SelectionBox type={"radio"} name="radio-group" />
            <SelectionBox
              type={"radio"}
              label={"Radio Button"}
              name="radio-group"
            />
            <SelectionBox type={"Checkbox"} />
            <SelectionBox type={"Checkbox"} label={"Checkbox"} />
          </div>
          <CodeSnippet code={selectionBoxCode} css={selectionBoxCSS} />
          <h2 className="heading" id="list">
            List Group
          </h2>
          <div className="componentContainer">
            <h4>Unorder List</h4>
            <UnorderList
              items={["Learn React", "Learn Node.js", "Learn Laravel"]}
            />
            <h4> Order List</h4>
            <OrderList
              items={[
                "Learn React Native",
                "Learn Data structure and Algorithm",
                "Learn Reduxl",
              ]}
            />
          </div>
          <CodeSnippet code={listCode} css={listCSS} />
          <h2 className="heading" id="card">
            Card
          </h2>
          <div className="card">
            <Card
              image={"images/ful.jpg"}
              alt={"Painting of a Flower Hanging in the Wall"}
              title={"Painting of Flower"}
            />
            <Card
              image={"images/himal.jpg"}
              alt={"Beautiful painting of landscape"}
              title={"Beautiful landscape painting"}
            />
          </div>
          <CodeSnippet code={cardCode} css={cardCSS} />
          <h2 className="heading" id="modal">
            Modal
          </h2>
          <div className="buttonModalContainer">
            <div>Click the button to display the modal.</div>
            <Button
              name="Display Modal"
              className={"button__primary"}
              onClick={() => setDisplayModal(true)}
            />
          </div>
          <CodeSnippet code={modalCode} css={modalCSS} />
          {displayModal && (
            <div className="dModal">
              <Modal
                image={item.image}
                title={item.title}
                alt={item.alt}
                price={item.price}
                artist={item.artist}
                artistImage={item.artistImage}
                onClick={() => setDisplayModal(false)}
              />
            </div>
          )}

          <h2 className="heading" id="form">
            Form
          </h2>
          <div className="formContainer" id="form">
            <Form />
          </div>
          <CodeSnippet code={formCode} css={formCSS} />
          <h2 className="heading" id="herosection">
            HeroSection
          </h2>
          <HeroSection
            text={
              "Add a Touch of Beauty to your Home with our Stunning Pieces of Art"
            }
            src={"images/moon.jpg"}
          />
          <CodeSnippet code={heroSectionCode} css={heroSectionCSS} />
          <h2 className="heading" id="footer">
            Footer
          </h2>
          <CodeSnippet code={footerCode} css={footerCSS} />
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
