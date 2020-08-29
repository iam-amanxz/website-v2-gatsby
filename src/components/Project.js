import React, { useEffect } from "react"
import Image from "gatsby-image"

import AOS from "aos"
import "aos/dist/aos.css"

import { FaGithub, FaCloud } from "react-icons/fa"

import "../css/Project.css"

const Project = ({ project }) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div data-aos="fade-up" className="project">
      {/** Picture */}
      <Image
        className="project__image"
        fluid={project.projectImage.asset.fluid}
        alt={project.title}
      />

      {/** Details */}
      <div className="project__card md:text-left bg-secondary p-10 px-20">
        {/** Title */}
        <h3 className="project--title font-tertiary text-xl mb-4">
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
            <div className="project__icon__wrapper bg-accent rounded-full inline-block p-3">
              <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
                <FaGithub className="project__icon text-bg" />
              </a>
            </div>
          </div>

          {/** Live Preview */}
          {project.hostedLink && (
            <div className="project__link">
              <div className="project__icon__wrapper bg-accent rounded-full inline-block p-3">
                <a href={project.hostedLink} target="_blank" rel="noreferrer">
                  <FaCloud className="project__icon text-bg " />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
