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

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "assets/LeahCarlin_Resume_FS.pdf";
    link.download = "LeahCarlin_Resume.pdf";
    link.click();
  };

  return (
    <div className="about container" id="about">
      <div>
        <h1 data-aos="fade-up" data-aos-once="true">
          About Me
        </h1>
        <h3 data-aos="fade-up" data-aos-once="true">
          I'm a results-driven Full Stack Developer with global experience and a
          passion for crafting high-quality, user-centric interfaces that
          enhance digital experiences.
        </h3>
      </div>
      <div className="work">
        <div className="header" data-aos="fade-up" data-aos-once="true">
          <h1>Professional Experience</h1>
          <button onClick={downloadResume} id="download-resume">
            Download resume
          </button>
        </div>
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
