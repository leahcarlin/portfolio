import React, { useEffect } from "react";
import AOS from "aos";
import Experience from "../../Components/Experience/Experience";
import { workDetails, educationDetails } from "../../Details";
import "./About.scss";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="about container">
      <div>
        <h1 data-aos="fade-up" data-aos-once="true">
          About Me
        </h1>
        <h3 data-aos="fade-up" data-aos-once="true">
          I'm a results-driven Full Stack Developer with global experience and a
          passion for crafting high-quality, user-centric intefaces that enhance
          digital experiences.
        </h3>
      </div>
      <div className="work">
        <button>Download resume</button>
        <h1 data-aos="fade-up" data-aos-once="true">
          Professional Experience
        </h1>
        {workDetails
          ? workDetails.map((work, index) => (
              <div data-aos="fade-up" data-aos-once="true" key={index}>
                <Experience
                  title={work.title}
                  company={work.company}
                  location={work.location}
                  duration={work.duration}
                  type="work"
                />
              </div>
            ))
          : null}
      </div>
      <div className="education">
        <h1 data-aos="fade-up" data-aos-once="true">
          Education
        </h1>
        {educationDetails
          ? educationDetails.map((edu, index) => (
              <div data-aos="fade-up" data-aos-once="true" key={index}>
                <Experience
                  title={edu.title}
                  company={edu.company}
                  location={edu.location}
                  duration={edu.duration}
                  type="education"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default About;
