import React from "react"
import Image from "gatsby-image"

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
                fluid {
                  srcSet
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

  return (
    <section id="about" className=" bg-secondary">
      <div className="container md:flex py-24">
        {/* Left - Image */}
        <div className="about__image md:w-1/2 p-10 md:p-20">
          <Image className="about__pic md:h-full" fluid={image} alt="myself" />
        </div>
        {/* Right - Text */}
        <div className="about__text md:w-1/2">
          <h2 className="section__title mb-8 text-center md:text-left">
            What’s my story?
          </h2>
          <p className="about__description leading-7">
            I am originally from Chilaw and currently based in Colombo, Sri
            Lanka. I am a Software Engineer and a music freak. I’ve grown up
            with computers pretty much since I was 10 and it is my second best
            firend after my ‘Quacky’ which is a rubber duck that does nothing
            except stare at me the whole time while I code and swear at my
            computer in random spanish words. <br />
            <br />
            Laying on the bed and learning new technologies and getting up to
            date with new trends and technologies is what I do most of the time.
            I am a well organized person with my reports and folder structure
            even though my room is super messy. I have a Software Engineering
            degree but I like to call myself a self-taught developer since 90%
            of what I know is I learned from internet just like everyone else.
            <br />
            <br />
            I am football geek and hardcore Real Madrid and Cristiano Ronaldo
            supporter even though a 10 year old can outpace me on the field
            which is something I am not very good at. But I am way better at
            video games and I like to beat the crap out of them kids who
            humiliated me on the field.
            <br />
            <br />
            My family is so huge except nobody has any idea what I do with my
            computer and tech stuffs sounds like black magic to them. That makes
            a lot of sense why I spend most my time with family memebers arguing
            why I am a whole different breed from them and I am going to succeed
            one day.
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
