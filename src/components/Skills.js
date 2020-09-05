import React from "react";

import Icon1 from "../images/skills-1.svg";
import Icon2 from "../images/skills-2.svg";
import Icon3 from "../images/skills-3.svg";
import IconCheck from "../images/skills-check.svg";

import "../css/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section--title">Some things I can do</h2>
        <p className="skills__description text-center mb-6">
          I am one of those hard to find guys whose right and left parts of the
          brain function equally well, meaning I am both creative and analytical
          (Thanos would be impressed). I can do a lot of things. Since we are
          talking tech here let’s stick only to tech shall we.
        </p>
        <div className="skills__cards max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {/** Card1 */}
          <div className="skills__card text-center">
            <img src={Icon1} className="card--icon mx-auto" alt="icon1" />
            <h3 className="card--title">UI/UX Design</h3>
            <p className="card--description">
              I create beautiful User Interface designs with a great User
              Experience in mind
            </p>
          </div>
          {/** Card2 */}
          <div className="skills__card text-center">
            <img src={Icon2} className="card--icon mx-auto" alt="icon2" />
            <h3 className="card--title">Mobile Development</h3>
            <p className="card--description">
              Build performance rich and responsive mobile applications with
              Flutter (mostly) and native Android
            </p>
          </div>
          {/** Card3 */}
          <div className="skills__card text-center">
            <img src={Icon3} className="card--icon mx-auto" alt="icon3" />
            <h3 className="card--title">Web Development</h3>
            <p className="card--description">
              Develop responsive websites and interactive Full-Stack web
              applications. Yep Full-Stack!!!
            </p>
          </div>
        </div>
        <h3 className="section__subtitle font-primary font-medium text-secondary text-2xl lg:text-3xl text-center my-6">
          I can also
        </h3>
        <div className="skills__additional">
          <div className="skills__additional--skill">
            <img src={IconCheck} alt="" />
            <p className="additional--skill--text">
              Spell well without auto complete
            </p>
          </div>
          <div className="skills__additional--skill">
            <img src={IconCheck} alt="" />
            <p className="additional--skill--text">Talk without a break</p>
          </div>
          <div className="skills__additional--skill">
            <img src={IconCheck} alt="" />
            <p className="additional--skill--text">
              Learn (almost) anything if I wanted to
            </p>
          </div>
          <div className="skills__additional--skill">
            <img src={IconCheck} alt="" />
            <p className="additional--skill--text">
              Sketch well than most programmers
            </p>
          </div>
          <div className="skills__additional--skill">
            <img src={IconCheck} alt="" />
            <p className="additional--skill--text">
              Complete an entire season of Game of Thrones in one night
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
