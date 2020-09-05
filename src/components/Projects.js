import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import AOS from "aos";
import "aos/dist/aos.css";

import { BsArrowRight } from "react-icons/bs";

import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
  `);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 data-aos="fade-up" className="section--title">
          Some things I’ve built
        </h2>
      </div>
      <div className="projects__list mb-8">
        {data.allSanityProject.edges.map(({ node: project }) => (
          <Project key={project.slug.current} project={project} />
        ))}
      </div>
      <div className="projects__more font-primary md:text-lg flex justify-center">
        <button
          data-aos="fade-up"
          className="btn project__btn flex items-center"
        >
          <a
            href="https://github.com/iam-amanxz/projects"
            target="_blank"
            rel="noreferrer"
          >
            See More Projects
          </a>
          <BsArrowRight className="project__arrow text-3xl ml-3" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
