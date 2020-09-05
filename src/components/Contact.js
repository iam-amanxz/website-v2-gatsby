import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../css/Contact.css";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
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
    <section id="contact" className="contact">
      <div className="container text-center">
        <h2 className="section--title">Get in touch</h2>
        <p className="contact__description mb-10 max-w-4xl mx-auto">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, shoot an
          email to <strong>iam.amanxz@gmail.com</strong>. I'll try my best to
          get back to you!
        </p>
        <button className="btn btn--primary text-base md:text-lg leading-none mb-10">
          <a
            href="mailto:iam.amanxz@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Say Hello!
          </a>
        </button>
        <h3 className="section__subtitle font-primary font-medium text-secondary text-2xl lg:text-3xl text-center mb-10">
          Find me on
        </h3>
        <div className="social__links flex justify-center text-xl md:text-3xl ">
          {/** LinkedIn */}
          <div className="footer__link">
            <a href={links.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="icon text-gray-200" />
            </a>
          </div>
          {/** Dribbble */}
          <div className="footer__link">
            <a href={links.dribbbleUrl} target="_blank" rel="noreferrer">
              <FaDribbble className="icon text-gray-200" />
            </a>
          </div>
          {/** Twitter */}
          <div className="footer__link">
            <a href={links.twitterUrl} target="_blank" rel="noreferrer">
              <FaTwitter className="icon text-gray-200" />
            </a>
          </div>
          {/** Instagram */}
          <div className="footer__link">
            <a href={links.instagramUrl} target="_blank" rel="noreferrer">
              <FaInstagram className="icon text-gray-200" />
            </a>
          </div>
          {/** Github */}
          <div className="footer__link">
            <a href={links.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub className="icon text-gray-200" />
            </a>
          </div>
          {/** Codepen */}
          <div className="footer__link">
            <a href={links.codepenUrl} target="_blank" rel="noreferrer">
              <FaCodepen className="icon text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
