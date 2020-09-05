import React, { useEffect } from "react";
import Image from "gatsby-image";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaCloud } from "react-icons/fa";

import "../css/Project.css";

const Project = ({ project }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article data-aos="fade-up" className="project">
      {/** Picture */}
      <Image
        className="project__image"
        fluid={project.projectImage.asset.fluid}
        alt={project.title}
      />
      {/** Details */}
      <div className="project__card md:text-left p-5 md:p-10 px-10 md:px-20">
        {/** Title */}
        <h3 className="project--title font-primary text-secondary font-semibold text-xl mb-4 text-center md:text-left">
          {project.title}
        </h3>
        {/** Description */}
        <p className="project__description text-sm mb-4">
          {project.description}
        </p>
        {/** Tags */}
        <ul className="project__tags flex justify-center md:justify-start mb-4">
          {project.tags.map(tag => (
            <li key={tag} className="project__tag text-sm font-semibold mr-5">
              {tag}
            </li>
          ))}
        </ul>
        {/** Links */}
        <div className="project__links flex justify-center md:justify-start">
          {/** Source Code */}
          <div className="project__link mr-5">
            <div className="project__icon__wrapper bg-primary rounded-full inline-block p-3">
              <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
                <FaGithub className="project__icon" />
              </a>
            </div>
          </div>

          {/** Live Preview */}
          {project.hostedLink && (
            <div className="project__link">
              <div className="project__icon__wrapper bg-primary rounded-full inline-block p-3">
                <a href={project.hostedLink} target="_blank" rel="noreferrer">
                  <FaCloud className="project__icon " />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
