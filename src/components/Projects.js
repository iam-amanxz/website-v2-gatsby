import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        <button className="project__btn btn">
          <a
            href="https://github.com/iam-amanxz/projects"
            target="_blank"
            rel="noreferrer"
          >
            See More Projects
          </a>
        </button>
      </div>
    </section>
  )
}

export default Projects
