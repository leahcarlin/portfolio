import React from "react";
import { IExperience } from "../../Details";
import { ReactComponent as IconLocation } from "../../assets/icon_location.svg";
import { ReactComponent as IconChair } from "../../assets/icon_chair.svg";
import { ReactComponent as IconGrad } from "../../assets/icon_grad.svg";
import "./Experience.scss";

const Experience: React.FC<IExperience & { type: string }> = ({
  title,
  company,
  location,
  duration,
  type,
}) => {
  return (
    <div className="experience container">
      <h4>{title}</h4>
      <div className="details">
        <div className="info">
          <p className="company">
            {type === "work" ? (
              <IconChair width="20" height="20" />
            ) : (
              <IconGrad width="20" height="20" />
            )}
            {company}
          </p>
          <p>
            <IconLocation width="30" height="30" />
            {location}
          </p>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Experience;
