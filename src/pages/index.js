import React from "react";

// Components
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// CSS
import "../css/Index.css";

import SEO from "../components/seo";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  </div>
);

export default IndexPage;
