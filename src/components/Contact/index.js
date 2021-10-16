import React from "react";

import { Wrapper } from "./ContactStyle";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  FaCode,
  FaJsSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Wrapper className="contact">
        <h1>
          <span>Contact</span>
        </h1>
        <p>Get in touch with me</p>

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

          <a href="supradatripathy789@gmail.com" target="_blank">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <div className="bottom">Made with Love and React @Suprada_2021</div>
      </Wrapper>
    </>
  );
};

export default Contact;
