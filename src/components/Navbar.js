import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container flex justify-between items-center">
        <div className="nav__brand text-lg md:text-xl">
          <h2 className="font-light">
            husnul<span className="font-semibold">aman</span>
          </h2>
        </div>
        <FaBars className="nav__toggle md:text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
