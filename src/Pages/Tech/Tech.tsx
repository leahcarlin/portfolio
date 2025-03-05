import React, { useEffect } from "react";
import AOS from "aos";
import { techStackDetails } from "../../Details";
import "./Tech.scss";

const Tech: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="tech container">
      <h1 data-aos="fade-up" data-aos-once="true">
        Technologies
      </h1>
      <div className="tags">
        {techStackDetails.map((tech, index) => (
          <div
            key={index}
            className="tag"
            data-aos="zoom-in-left"
            data-aos-once="true"
          >
            <img src={tech.url} alt={tech.title} title={tech.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
