import React from "react";
import { IProjectCard } from "../../Details";
import { ReactComponent as IconEye } from "../../assets/icon_eye.svg";
import { ReactComponent as IconGitHub } from "../../assets/icon_github.svg";
import "./ProjectCard.scss";

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) => {
  return (
    <div className="project-card container">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <span>TechStack: </span>
          {techstack}
        </p>
        <div className="links">
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            <IconEye width="25" height="25" />
            <p>Live preview</p>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <IconGitHub width="25" height="25" />
            <p>View code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
