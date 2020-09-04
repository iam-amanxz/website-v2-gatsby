import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Project from "../components/Project";

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
  `);

  return (
    <section id="projects">
      <Project />
    </section>
  );
};

export default Projects;
