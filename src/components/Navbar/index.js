import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Wrapper } from "./NavbarStyle";

function focus({ target }) {
  window.location.href = target.id;
}

const Navbar = () => {
  return (
    <>
      <Wrapper className="projects">
        <div className="logo">
          <NavLink to="/">
            <span className="header">Suprada</span>
          </NavLink>
        </div>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label for="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>

        <ul className="nav-links">
          <div onClick={focus} id="#home" tar="home" className="nav-link">
            Home
          </div>
          <li onClick={focus} id="#about-me" className="nav-link">
            About
          </li>
          <li onClick={focus} id="#skill" className="nav-link">
            Skills
          </li>
          <li onClick={focus} id="#project" className="nav-link">
            Projects
          </li>
          <li onClick={focus} id="#contact" className="nav-link">
            Contact
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
