import React, { useState } from "react";
import clsx from "clsx";
import "./NavBar.scss";

const NavBarMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-mobile container">
      <div className="links-container">
        <div
          className={clsx("hamburger", { open: menuOpen })}
          onClick={() => {
            console.log("Hamburger clicked!");
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={clsx("nav-overlay", { open: menuOpen })}>
          <ul className="nav-links">
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
              <a href="#tech" onClick={() => setMenuOpen(false)}>
                Tech
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
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
