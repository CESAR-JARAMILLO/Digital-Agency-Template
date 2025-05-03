"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className="navbar navbar--sticky">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <a href="/">YourLogo</a>
        </div>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#about" className="navbar__link">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#services" className="navbar__link">
                Services
              </a>
            </li>
            <li className="navbar__item">
              <a href="#projects" className="navbar__link">
                Projects
              </a>
            </li>
          </ul>
          <a href="#contact" className="navbar__cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
