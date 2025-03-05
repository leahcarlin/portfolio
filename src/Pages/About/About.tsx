import React from "react";
import Experience from "../../Components/Experience/Experience";
import { workDetails, educationDetails } from "../../Details";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about container">
      <div>
        <h1>About Me</h1>
        <h3>
          I'm a results-driven Full Stack Developer with global experience and a
          passion for crafting high-quality, user-centric intefaces that enhance
          digital experiences.
        </h3>
      </div>
      <div className="work">
        <button>Download resume</button>
        <h1>Professional Experience</h1>
        {workDetails
          ? workDetails.map((work, index) => (
              <Experience
                key={index}
                title={work.title}
                company={work.company}
                location={work.location}
                duration={work.duration}
                type="work"
              />
            ))
          : null}
      </div>
      <div className="education">
        <h1>Education</h1>
        {educationDetails
          ? educationDetails.map((edu, index) => (
              <Experience
                key={index}
                title={edu.title}
                company={edu.company}
                location={edu.location}
                duration={edu.duration}
                type="education"
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default About;
