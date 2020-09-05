import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 data-aos="fade-up" className="section--title">
          About Me
        </h2>
        <div className="about__description max-w-3xl mx-auto ">
          <p data-aos="fade-up">
            I am Aman. Originally from Chilaw and currently based in Colombo,
            Sri Lanka. I am a Software Engineer and a music freak. I’ve always
            been a tech lover. I got my first computer when I was 14. I used
            computers for gaming pretty much the whole day and wanted to do more
            than that and push my limits with it. That’s how I began my journey
            as a Software Engineer.
          </p>
          <br />
          <p data-aos="fade-up">
            Laying on the bed and learning new technologies and getting up to
            date with new trends and technologies is what I do most of the time.
            I am a well-organized person with my reports and folder structure
            (even though my room is super messy). I have a Software Engineering
            degree but I like to call myself a self-taught developer since 90%
            of what I know is I learned from internet just like everyone else.
          </p>
          <br />
          <p data-aos="fade-up">
            I have so many human friends but nobody takes the place of ‘Quacky’
            which is a rubber duck that does nothing except stare at me the
            whole time while I code and swear at my computer in random Spanish
            words.
          </p>
          <br />
          <p data-aos="fade-up">
            I am not an alcoholic but If I ever show up to work red eyed that’s
            probably because I am a football geek and hardcore Real Madrid and
            Cristiano Ronaldo supporter and match times are horrible in South
            Asia. I call myself a gamer but I’ve been playing the same old COD4
            for over 3 years now because that’s probably the only good game I
            can run on my potato PC.
          </p>
          <br />
          <p data-aos="fade-up">
            My family is so huge except nobody has any idea what I do with my
            computer the whole day and tech stuffs sounds like black magic to
            them. That makes a lot of sense why I spend most my time with family
            members arguing why I am a whole different breed from them and how I
            am going to succeed one day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
