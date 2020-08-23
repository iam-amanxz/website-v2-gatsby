import React, { useState, useEffect } from "react"
import jump from "jump.js"

import { FaBars } from "react-icons/fa"
import { RiCloseLine } from "react-icons/ri"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const navList = document.querySelector(".nav__list")

    switch (menuOpen) {
      case true:
        navList.style.display = "flex"
        break
      case false:
        navList.style.display = "none"
      default:
        break
    }
  }, [menuOpen])

  // Add Active Class
  const handleClick = e => {
    const links = document.querySelectorAll(".nav__link")
    const navList = document.querySelector(".nav__list")
    links.forEach(link => {
      link.classList.remove("active")
    })
    const el = e.target
    el.classList.add("active")
    navList.style.display = "none"
    setMenuOpen(false)
    jump(el.getAttribute("href"), {
      duration: 1000,
    })
  }

  return (
    <nav className="nav">
      {/** Nav Logo */}
      <div className="nav__container">
        <p className="nav__logo  text-2xl">
          <a href="#hero">
            husnul<span className="font-extrabold">aman.</span>
          </a>
        </p>
        {/** Nav Toggle */}
        {menuOpen === true ? (
          <RiCloseLine
            className="nav__toggle text-bg toggle--close md:hidden text-4xl"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="nav__toggle toggle--bar md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          />
        )}

        {/** Nav List */}

        <ul className="nav__list">
          <li className="nav__list--item" onClick={handleClick}>
            <a href="#hero" className="nav__link">
              Home
            </a>
          </li>

          <li className="nav__list--item md:ml-10" onClick={handleClick}>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>

          <li className="nav__list--item  md:ml-10" onClick={handleClick}>
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>

          <li className="nav__list--item  md:ml-10" onClick={handleClick}>
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>

          <li className="nav__list--item  md:ml-10" onClick={handleClick}>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
