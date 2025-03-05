import React from "react";
import { techStackDetails } from "../../Details";
import "./Tech.scss";

const Tech: React.FC = () => {
  return (
    <div className="tech container">
      <h1>Technologies</h1>
      <div className="tags">
        {techStackDetails.map((tech, index) => (
          <div key={index} className="tag">
            <img src={tech.url} alt={tech.title} title={tech.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
