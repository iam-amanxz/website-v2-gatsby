import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import jump from "jump.js";
import AOS from "aos";

import { BiChevronDown } from "react-icons/bi";

import "aos/dist/aos.css";
import "../css/Header.css";

import Navbar from "../components/Navbar";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const query = useStaticQuery(graphql`
    query profilequery {
      allSanityProfile {
        edges {
          node {
            resumeUrl
            heroImage {
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

  let image = null;
  query.allSanityProfile.edges.map(({ node }) => {
    image = node.heroImage.asset.fluid;
  });

  let resumeUrl = query.allSanityProfile.edges[0].node.resumeUrl;

  const handleClick = () => {
    jump("#about", {
      duration: 1000,
    });
  };

  return (
    <header id="header" className="header font-primary">
      <Navbar />
      <section id="hero" className="hero h-screen">
        <div className="container md:grid gap-12 grid-cols-2">
          {/* Bg Image */}
          <div className="hero__image self-center text-right">
            <Image fluid={image} alt="hero" />
          </div>
          {/* Hero Texts */}
          <div className="hero__content self-center">
            <p
              data-aos="fade-down"
              className="text-xl md:text-2xl font-light mb-3"
            >
              Hello, I am
            </p>
            <h1
              data-aos="fade-down"
              className="text-5xl md:text-6xl font-bold mb-3 uppercase"
            >
              Husnul Aman
            </h1>
            <p
              data-aos="fade-down"
              className="text-xl md:text-2xl font-light mb-10"
            >
              And I chose to solve problems with programming
            </p>
            <button
              data-aos="fade-down"
              className="btn btn--primary text-base md:text-lg"
            >
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
            </button>
          </div>
          {/* Chevron */}
          <BiChevronDown
            className="hero__chevron text-3xl cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
