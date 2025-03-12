import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import LogoLight from "../../assets/logo_light.png";
import LogoDark from "../../assets/logo_dark.png";
import NavBarMobile from "./NavBarMobile";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Screen width updated:", screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <a href="#home">
        {isDarkMode ? (
          <img src={LogoDark} alt="dark" />
        ) : (
          <img src={LogoLight} alt="light" />
        )}
      </a>
      {screenWidth < 480 ? (
        <NavBarMobile />
      ) : (
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
