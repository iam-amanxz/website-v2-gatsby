import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../css/Header.css";

import Navbar from "../components/Navbar";

const Header = () => {
  const data = useStaticQuery(graphql`
    query ResumeUrlQuery {
      allSanityProfile {
        edges {
          node {
            resumeUrl
          }
        }
      }
    }
  `);

  let resumeUrl = data.allSanityProfile.edges[0].node.resumeUrl;

  return (
    <header id="#" className="header">
      <Navbar />
      <section id="hero">
        <p>Hero</p>
      </section>
    </header>
  );
};

export default Header;
