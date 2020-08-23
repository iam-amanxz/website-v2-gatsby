import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BsArrowRight } from "react-icons/bs"

import Project from "../components/Project"

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

  return (
    <section id="projects">
      <div className="container py-24 text-center">
        <h2 className="section__title mb-8">Some things I’ve built</h2>

        {/** PROJECTS */}
        <div className="projects__list mb-8">
          {data.allSanityProject.edges.map(({ node: project }) => (
            <Project key={project.slug.current} project={project} />
          ))}
        </div>
        <div className="projects__more flex justify-center">
          <button className="project__btn font-semibold flex items-center">
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
