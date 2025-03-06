import React, { useRef, useEffect } from "react";
import Photo from "../../assets/leahcarlin.jpeg";
import gsap from "gsap";
import "./Home.scss";

const Home: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!introRef.current || !photoRef.current) return;

    const introElements = Array.from(introRef.current.children);

    // Set initial positions OFF screen
    gsap.set(introElements, { x: -200, opacity: 0 });
    gsap.set(photoRef.current, { x: 200, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(introElements, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.out",
    }).to(photoRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="home container" id="home">
      <div className="intro" ref={introRef}>
        <h1>Hi,👋</h1>
        <h1>my name is</h1>
        <h1 className="name">Leah Carlin</h1>
        <h2>I create cool things for web</h2>
      </div>
      <div className="image-container" ref={photoRef}>
        <img src={Photo} alt="Leah Carlin" />
      </div>
    </div>
  );
};

export default Home;
