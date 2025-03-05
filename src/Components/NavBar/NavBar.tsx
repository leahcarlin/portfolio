import React from "react";
import LogoLight from "../../assets/logo_light.png";
import LogoDark from "../../assets/logo_dark.png";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <nav>
      {isDarkMode ? (
        <img src={LogoDark} alt="dark" />
      ) : (
        <img src={LogoLight} alt="light" />
      )}
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
