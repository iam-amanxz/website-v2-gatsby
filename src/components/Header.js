import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import HeroPng from "../images/hero.png";
import { BiChevronDown } from "react-icons/bi";

// import HeroBg from "../images/hero_background.jpg";

import "../css/Header.css";

// import Navbar from "../components/Navbar";

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query ResumeUrlQuery {
  //     allSanityProfile {
  //       edges {
  //         node {
  //           resumeUrl
  //         }
  //       }
  //     }
  //   }
  // `);

  // let resumeUrl = data.allSanityProfile.edges[0].node.resumeUrl;

  return (
    <header id="#" className="header font-primary">
      <section id="hero" className="hero h-screen">
        <div className="container md:grid gap-12 grid-cols-2">
          {/* Bg Image */}
          <div className="hero__image self-center text-right">
            <img src={HeroPng} alt="hero" />
          </div>
          {/* Hero Texts */}
          <div className="hero__content self-center">
            <p className="text-xl md:text-2xl font-light mb-3">Hello, I am</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">Husnul Aman</h1>
            <p className="text-xl md:text-2xl font-light mb-10">
              And I chose to solve problems with programming
            </p>
            <button className="btn btn--primary text-base md:text-lg">
              Resume
            </button>
          </div>
          {/* Chevron */}
          <BiChevronDown className="hero__chevron text-3xl" />
        </div>
      </section>
    </header>
  );
};

export default Header;
