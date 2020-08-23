import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Project from "../components/Project"

import { BsArrowRight } from "react-icons/bs"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allSanityProject {
        edges {
          node {
            title
            description
            hostedLink
            sourceCodeLink
            tags
            slug {
              current
            }
            projectImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  AOS.init()

  return (
    <section id="projects">
      <div className="container py-24 text-center">
        <h2 data-aos="fade-up" className="section__title mb-8">
          Some things I’ve built
        </h2>

        {/** PROJECTS */}
        <div className="projects__list mb-8">
          {data.allSanityProject.edges.map(({ node: project }) => (
            <Project key={project.slug.current} project={project} />
          ))}
        </div>
        <div className="projects__more flex justify-center">
          <button
            data-aos="fade-up"
            className="project__btn font-semibold flex items-center"
          >
            <a
              href="https://github.com/iam-amanxz/projects"
              target="_blank"
              rel="noreferrer"
            >
              See More Projects
            </a>
            <BsArrowRight className="text-3xl ml-3" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
