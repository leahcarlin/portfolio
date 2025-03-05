import React, { useEffect } from "react";
import AOS from "aos";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { projectDetails } from "../../Details";
import "./Projects.scss";

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="projects container" id="projects">
      <h1 data-aos="fade-up" data-aos-once="true">
        Projects
      </h1>
      <div className="cards">
        {projectDetails.map((project, index) => (
          <div data-aos="fade-up-right" data-aos-once="true" key={index}>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techstack={project.techstack}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
