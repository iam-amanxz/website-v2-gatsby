import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import "../css/Header.css"

import Navbar from "../components/Navbar"

import HeaderDecoration from "../images/hero-decoration.svg"

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
  `)

  let resumeUrl = data.allSanityProfile.edges[0].node.resumeUrl

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header id="#" className="header">
      <div className="header__decoration">
        <img
          src={HeaderDecoration}
          alt="decoration"
          className="h-64 md:h-full"
        />
      </div>
      <Navbar />
      <section
        id="hero"
        className="hero max-w-contentMax mx-auto flex flex-col justify-end pb-32 md:pb-0 md:justify-center"
      >
        {/* Greeting */}
        <div className="hero__greeting font-primary font-bold mb-5">
          <h1 data-aos="fade-down" className="text-2xl md:text-3xl lg:text-4xl">
            Hi there,
          </h1>
          <h1 data-aos="fade-down" className="text-5xl lg:text-6xl">
            My name is Husnul Aman
          </h1>
        </div>

        {/* Pargraph */}
        <p
          data-aos="fade-down"
          className="hero__leading font-tertiary font-light text-xl md:text-2xl lg:text-3xl md:w-2/5 mb-8"
        >
          And I chose to solve problems with programming
        </p>

        {/* Buttons */}
        <div data-aos="fade-down" className="hero__buttons">
          <button className="btn hero__buttons--primary text-bg bg-accent">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </button>
          <button className="btn hero__buttons--secondary ml-5">
            <a href="#projects">Portfolio</a>
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header
