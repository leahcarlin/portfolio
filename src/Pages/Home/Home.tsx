import React, { useRef, useEffect } from "react";
import Photo from "../../assets/leahcarlin.jpeg";
import gsap from "gsap";
import "./Home.scss";

const Home: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!introRef.current || !photoRef.current) return;

    const introElements = Array.from(introRef.current.children); // Convert children to an array

    // Set initial positions OFF screen
    gsap.set(introElements, { x: -200, opacity: 0 }); // Move text left & make invisible
    gsap.set(photoRef.current, { x: 200, opacity: 0 }); // Move image right & make invisible

    // Create timeline animation
    const tl = gsap.timeline();

    tl.to(introElements, {
      x: 0, // Move to normal position
      opacity: 1,
      duration: 0.5,
      stagger: 0.3, // Delay each element slightly
      ease: "power2.out",
    }).to(photoRef.current, {
      x: 0, // Move to normal position
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="container">
      <div className="intro" ref={introRef}>
        <h1>Hi,👋</h1>
        <h1>my name is</h1>
        <h1>Leah</h1>
        <h2>I create cool things for web</h2>
      </div>
      <div>
        <img ref={photoRef} src={Photo} alt="Leah Carlin" />
      </div>
      {/* <p>
        I'm a results-driven Full Stack Developer with global experience and a
        passion for crafting high-quality, user-centric intefaces that enhance
        digital experiences.
      </p> */}
    </div>
  );
};

export default Home;
