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
        // navList.style.display = "flex";
        navList.style.top = "70px";
        break;
      case false:
        // navList.style.display = "none";
        navList.style.top = "-50vh";
        break;
      default:
        break;
    }
  }, [menuOpen]);

  const handleClick = e => {
    const links = document.querySelectorAll(".nav__link");
    const navList = document.querySelector(".nav__list");
    // links.forEach(link => {
    //   link.classList.remove("active")
    // })
    const el = e.target;
    // el.classList.add("active")
    // navList.style.display = "none";
    setMenuOpen(false);
    jump(el.getAttribute("href"), {
      duration: 1000,
    });
    console.log(menuOpen);
  };

  return (
    <nav className="nav">
      <div className="container flex justify-between items-center">
        <div className="nav__brand text-lg md:text-xl">
          <h2 className="font-light">
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
        <li className="nav__list--item" onClick={handleClick}>
          <a href="#header" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__list--item" onClick={handleClick}>
          <a href="#about" className="nav__link">
            About
          </a>
        </li>

        <li className="nav__list--item" onClick={handleClick}>
          <a href="#skills" className="nav__link">
            Skills
          </a>
        </li>

        <li className="nav__list--item" onClick={handleClick}>
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>

        <li className="nav__list--item" onClick={handleClick}>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
