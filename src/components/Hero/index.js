import React from "react";

import { HeroWrapper } from "./HeroStyle";

import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  FaCode,
  FaJsSquare,
} from "react-icons/fa";

import { FiFigma } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <HeroWrapper id="home" className="home">
        <div className="container">
          <div className="text">
            <h2 className="upper_text">Hello, I'm</h2>
            <h1 className="name_text">SUPRADA TRIPATHY</h1>
            <p className="bottom_text">CREATIVE FRONT-END DEVELOPER</p>
            <a className="button" href="#" target="_blank">
              Resume
            </a>
            <div className="social_icon">
              <a href="https://github.com/Suprada-2002" target="_blank">
                <FaGithubAlt className="icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/suprada-tripathy-2981a1201/"
                target="_blank"
              >
                <FaLinkedinIn className="icon" />
              </a>

              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mail&to=supradatripathy789@gmail.com" target="_blank">
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>
        </div>
      </HeroWrapper>
    </>
  );
};

export default Hero;
