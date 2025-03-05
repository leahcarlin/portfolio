import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { projectDetails } from "../../Details";
import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="projects container">
      <h1>Projects</h1>
      <div className="cards">
        {projectDetails.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techstack={project.techstack}
            previewLink={project.previewLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
