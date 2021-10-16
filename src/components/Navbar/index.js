import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Wrapper } from "./NavbarStyle";

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
          <NavLink to="/home" activeClassName="home" exact>
            <li className="nav-link">Home</li>
          </NavLink>
          <NavLink to="/about" activeClassName="about">
            <li className="nav-link">About</li>
          </NavLink>
          <NavLink to="/skill" activeClassName="home" exact>
            <li className="nav-link">Skills</li>
          </NavLink>
          <NavLink to="/projects">
            <li className="nav-link">Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="nav-link">Contact</li>
          </NavLink>
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
