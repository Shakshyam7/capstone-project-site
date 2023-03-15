import React from "react";
import "./Sidebar.css";

function Sidebar({ sidebarItems, onClick }) {
  return (
    <>
      <div className="sidebarContainer">
        <ul className="sidebarUl">
          {sidebarItems.map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              className="sidebarLink"
              onClick={onClick}
            >
              <li className="sidebarItem" key={index}>
                {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
