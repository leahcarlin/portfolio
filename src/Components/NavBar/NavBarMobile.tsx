import React, { useState } from "react";
import "./NavBar.scss";

const NavBarMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-mobile container">
      <div
        className={`hamburger ${menuOpen && "open"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <ul className={`nav-links ${menuOpen && "open"}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBarMobile;
