import React, { useState } from "react";
import "./FullScreenMenu.css";
import Brand from "../../../assets/logo-4.png";
import { Link } from "react-router-dom";

const FullScreenMenu = ({ isOpen, toggleMenu }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  const [submenuOpen, setSubmenuOpen] = useState({
    learn: false,
    about: false,
    services: false,
    insightHub: false,
  });

  const toggleSubmenu = (submenu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [submenu]: !prevState[submenu],
    }));
  };

  return (
    <div>
      <div className={`fullscreen-menu ${isOpen ? "open" : ""}`}>
       
        <ul className="menu-list">
           
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#learn" onClick={() => toggleSubmenu("learn")}>
              Learn
            </a>
            {submenuOpen.learn && (
              <ul className="submenu">
                <li>
                  <a href="#learn1">Learn 1</a>
                </li>
                <li>
                  <a href="#learn2">Learn 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#about" onClick={() => toggleSubmenu("about")}>
              About
            </a>
            {submenuOpen.about && (
              <ul className="submenu">
                <li>
                  <a href="#about1">About 1</a>
                </li>
                <li>
                  <a href="#about2">About 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#services" onClick={() => toggleSubmenu("services")}>
              Services
            </a>
            {submenuOpen.services && (
              <ul className="submenu">
                <li>
                  <a href="#service1">Service 1</a>
                </li>
                <li>
                  <a href="#service2">Service 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#insight-hub" onClick={() => toggleSubmenu("insightHub")}>
              Insight Hub
            </a>
            {submenuOpen.insightHub && (
              <ul className="submenu">
                <li>
                  <a href="#insight1">Insight 1</a>
                </li>
                <li>
                  <a href="#insight2">Insight 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#contact">Get in Touch</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullScreenMenu;
