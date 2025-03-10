import React, { useState, useEffect } from "react";
import LogoLight from "../../assets/logo_light.png";
import LogoDark from "../../assets/logo_dark.png";
import NavBarMobile from "./NavBarMobile";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    // set initial value on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigatePage = (page: string) => {
    console.log("click");
    const element = document.getElementById(`#${page}`);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      {isDarkMode ? (
        <img src={LogoDark} alt="dark" />
      ) : (
        <img src={LogoLight} alt="light" />
      )}
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
