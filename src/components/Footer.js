import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import "../css/Footer.css"

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaDribbble,
  FaGithub,
} from "react-icons/fa"

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
  `)

  let links = data.allSanityProfile.edges[0].node

  AOS.init()

  return (
    <footer className="footer text-center text-bg lg:rounded-tl-full bg-primary py-8">
      <p data-aos="fade-up" className="footer__logo font-serif text-2xl mb-8">
        <a href="#">
          husnul<span className="font-extrabold">aman.</span>
        </a>
      </p>
      <div
        data-aos="fade-up"
        className="social__links mb-8 flex justify-center"
      >
        {/** LinkedIn */}
        <div className="footer__link mr-5">
          <div className="icon__wrapper bg-bg">
            <a href={links.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="icon text-primary" />
            </a>
          </div>
        </div>
        {/** Dribbble */}
        <div className="footer__link  mr-5">
          <div className="icon__wrapper bg-bg">
            <a href={links.dribbbleUrl} target="_blank" rel="noreferrer">
              <FaDribbble className="icon text-primary" />
            </a>
          </div>
        </div>
        {/** Twitter */}
        <div className="footer__link  mr-5">
          <div className="icon__wrapper bg-bg">
            <a href={links.twitterUrl} target="_blank" rel="noreferrer">
              <FaTwitter className="icon text-primary" />
            </a>
          </div>
        </div>
        {/** Instagram */}
        <div className="footer__link mr-5">
          <div className="icon__wrapper bg-bg">
            <a href={links.instagramUrl} target="_blank" rel="noreferrer">
              <FaInstagram className="icon text-primary" />
            </a>
          </div>
        </div>
        {/** Github */}
        <div className="footer__link mr-5">
          <div className="icon__wrapper bg-bg">
            <a href={links.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub className="icon text-primary" />
            </a>
          </div>
        </div>
        {/** Codepen */}
        <div className="footer__link">
          <div className="icon__wrapper bg-bg">
            <a href={links.codepenUrl} target="_blank" rel="noreferrer">
              <FaCodepen className="icon text-primary" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__credits">Designed & Built by Husnul Aman.</p>
    </footer>
  )
}
export default Footer
