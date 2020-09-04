import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../css/Footer.css";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allSanityProfile {
        edges {
          node {
            githubUrl
            instagramUrl
            linkedinUrl
            twitterUrl
            dribbbleUrl
            codepenUrl
          }
        }
      }
    }
  `);

  let links = data.allSanityProfile.edges[0].node;

  return (
    <footer className="footer">
      <p>Footer</p>
    </footer>
  );
};
export default Footer;
