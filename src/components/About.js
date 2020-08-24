import React, { useEffect } from "react"
import Image from "gatsby-image"
import AOS from "aos"
import "aos/dist/aos.css"

import "../css/About.css"

import { useStaticQuery, graphql } from "gatsby"

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
  `)

  let image = null
  data.allSanityProfile.edges.map(({ node }) => {
    image = node.profileImage.asset.fluid
  })

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section id="about" className=" bg-secondary">
      <div className="container py-24 md:flex">
        {/* Left - Image */}
        <Image
          data-aos="fade-up"
          className="about__pic"
          fluid={image}
          alt="myself"
        />
        {/* Right - Text */}
        <div data-aos="fade-up" className="about__text">
          <h2 className="section__title mb-8 text-center md:text-left">
            What’s my story?
          </h2>
          <p className="about__description leading-7">
            I am Aman. Originally from Chilaw and currently based in Colombo,
            Sri Lanka. I am a Software Engineer and a music freak. I’ve always
            been a tech lover. I got my first computer when I was 14. I used
            computers for gaming pretty much the whole day and wanted to do more
            than that and push my limits with it. That’s how I began my journey
            as a Software Engineer.
            <br />
            <br />
            Laying on the bed and learning new technologies and getting up to
            date with new trends and technologies is what I do most of the time.
            I am a well-organized person with my reports and folder structure
            (even though my room is super messy). I have a Software Engineering
            degree but I like to call myself a self-taught developer since 90%
            of what I know is I learned from internet just like everyone else.
            <br />
            <br />
            I have so many human friends but nobody takes the place of ‘Quacky’
            which is a rubber duck that does nothing except stare at me the
            whole time while I code and swear at my computer in random Spanish
            words
            <br />
            <br />
            I am not an alcoholic but If I ever show up to work red eyed that’s
            probably because I am a football geek and hardcore Real Madrid and
            Cristiano Ronaldo supporter and match times are horrible in South
            Asia. I call myself a gamer but I’ve been playing the same old COD4
            for over 3 years now because that’s probably the only good game I
            can run on my potato PC.
            <br />
            <br />
            My family is so huge except nobody has any idea what I do with my
            computer the whole day and tech stuffs sounds like black magic to
            them. That makes a lot of sense why I spend most my time with family
            members arguing why I am a whole different breed from them and how I
            am going to succeed one day.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
