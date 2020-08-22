import React from "react"

import { FaBars } from "react-icons/fa"

const Navbar = () => {
  // Add Active Class
  const handleClick = e => {
    const links = document.querySelectorAll(".nav__link")
    links.forEach(link => {
      link.classList.remove("active")
    })
    const el = e.target
    el.classList.add("active")
  }

  return (
    <nav className="nav max-w-contentMax mx-auto flex items-center justify-between font-serif">
      {/** Nav Logo */}
      <p className="nav__logo  text-2xl">
        <a href="#hero">
          husnul<span className="font-bold">aman.</span>
        </a>
      </p>
      {/** Nav Toggle */}
      <FaBars className="md:hidden text-2xl" />
      {/** Nav List */}
      <ul className="nav__list ml-auto hidden md:flex">
        <li className="nav__list--item" onClick={handleClick}>
          <a href="#" className="nav__link">
            Home
          </a>
        </li>

        <li className="nav__list--item ml-10" onClick={handleClick}>
          <a href="#about" className="nav__link">
            About
          </a>
        </li>

        <li className="nav__list--item  ml-10" onClick={handleClick}>
          <a href="#skills" className="nav__link">
            Skills
          </a>
        </li>

        <li className="nav__list--item  ml-10" onClick={handleClick}>
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>

        <li className="nav__list--item  ml-10" onClick={handleClick}>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
