import React, { useState, useEffect } from "react";
import jump from "jump.js";

import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navList = document.querySelector(".nav__list");

    switch (menuOpen) {
      case true:
        navList.style.top = "70px";
        break;
      case false:
        navList.style.top = "calc(-40vh - 70px)";
        break;
      default:
        break;
    }
  }, [menuOpen]);

  const goHome = () => {
    jump("#header", {
      duration: 1000,
    });
  };
  const handleClick = e => {
    const el = e.target;
    jump(`#${el.getAttribute("value")}`, {
      duration: 1000,
    });

    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container flex justify-between items-center">
        <div className="nav__brand text-lg md:text-xl">
          <h2 className="font-light" onClick={goHome}>
            husnul<span className="font-semibold">aman</span>
          </h2>
        </div>
        {menuOpen === true ? (
          <RiCloseLine
            className="nav__toggle toggle--close text-4xl"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="nav__toggle toggle--bar text-2xl"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      <ul className="nav__list text-lg font-bold">
        <li className="nav__list--item">
          <a value="header" className="nav__link" onClick={handleClick}>
            Home
          </a>
        </li>
        <li className="nav__list--item">
          <a value="about" className="nav__link" onClick={handleClick}>
            About
          </a>
        </li>

        <li className="nav__list--item">
          <a value="skills" className="nav__link" onClick={handleClick}>
            Skills
          </a>
        </li>

        <li className="nav__list--item">
          <a value="projects" className="nav__link" onClick={handleClick}>
            Projects
          </a>
        </li>

        <li className="nav__list--item">
          <a value="contact" className="nav__link" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
