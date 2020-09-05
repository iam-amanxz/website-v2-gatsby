import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Project from "../components/Project";

const Projects = () => {
  // const data = useStaticQuery(graphql`
  //   query ProjectsQuery {
  //     allSanityProject {
  //       edges {
  //         node {
  //           title
  //           description
  //           hostedLink
  //           sourceCodeLink
  //           tags
  //           slug {
  //             current
  //           }
  //           projectImage {
  //             asset {
  //               fluid {
  //                 ...GatsbySanityImageFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section--title">Some things I’ve built</h2>
      </div>
      <Project />
    </section>
  );
};

export default Projects;
