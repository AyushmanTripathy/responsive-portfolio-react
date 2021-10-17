import React from "react";

import { Wrapper } from "./SkillStyle";
import { FaReact, FaFigma, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <Wrapper id="skill" className="skill">
        <h2>
          <span>SkillSet</span>
        </h2>
        <div className="skill-container">
          <div className="skill-card">
            <FaReact className="icon" />
            <h3>React</h3>
          </div>
          <div className="skill-card">
            <IoLogoJavascript className="icon" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-card">
            <FaFigma className="icon" />
            <h3>Figma</h3>
          </div>
          <div className="skill-card">
            <FaSass className="icon" />
            <h3>Sass</h3>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Skills;
