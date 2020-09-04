import React from "react";
import Image from "gatsby-image";

import "../css/About.css";

import { useStaticQuery, graphql } from "gatsby";

const About = () => {
  const data = useStaticQuery(graphql`
    query ProfilePicQuery {
      allSanityProfile {
        edges {
          node {
            profileImage {
              asset {
                fluid(maxHeight: 600, maxWidth: 453) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  let image = null;
  data.allSanityProfile.edges.map(({ node }) => {
    image = node.profileImage.asset.fluid;
  });

  return (
    <section id="about">
      <p>About</p>
    </section>
  );
};

export default About;
