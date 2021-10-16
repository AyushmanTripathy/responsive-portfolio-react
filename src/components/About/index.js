import React from "react";

import { Wrapper } from "./AboutStyle";
import profile from "../stuff/profile_2.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Wrapper className="about" id="about-me">
        <div className="image-container">
          <img className="image" src={profile} alt="my profile image" />
        </div>
        <div className="info">
          <h1 className="title">
            <span>About Me</span>
          </h1>
          <p className="desc">
            Hello, My name is Suprada Tripathy. I am a self-taught front-end web
            developer. I am passionate about web-development and have worked on
            a variety of projects. I am also intrested in UI/UX.I enjoy building
            intercative web apps and responsive design. With every line of code
            I strive to make web a beautiful place.
          </p>
          <a className="link" href="#" target="_blank">
            More about me <FaChevronRight className="icon" />
          </a>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
