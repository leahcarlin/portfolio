import React from "react";
import "./Contact.scss";
import { ReactComponent as IconGithub } from "../../assets/icon_github_footer.svg";
import { ReactComponent as IconLinkedin } from "../../assets/icon_linkedin.svg";
import { ReactComponent as IconEmail } from "../../assets/icon_email.svg";

const Contact: React.FC = () => {
  return (
    <div className="contact container" id="contact">
      <h1 data-aos="fade-up" data-aos-once="true">
        Contact
      </h1>
      <div className="contact-info">
        <h2>Leah Carlin</h2>
        <h3>
          <strong>Phone: </strong>508-243-3170
        </h3>
        <div className="media">
          <a href="mailto:leah.r.carlin@gmail.com">
            <IconEmail width="40" height="40" />
          </a>
          <a href="https://linkedin.com/in/leah-carlin">
            <IconLinkedin width="40" height="40" />
          </a>
          <a href="https://github.com/leahcarlin">
            <IconGithub width="43" height="43" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
