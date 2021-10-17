import React from "react";

import { Wrapper } from "./ProjectStyle";
import Sort from "../stuff/SV.JPG";
import Maze from "../stuff/MG.JPG";
import Crude from "../stuff/CA.JPG";

const Project = () => {
  return (
    <>
      <Wrapper id="project" className="projects">
        <h2 className="title">
          <span>Projects</span>
        </h2>

        <div className="cards">
          {/*first card*/}
          <div className="project1 card">
            <img className="sv" src={Sort} alt="sorting visulaizer" />
            <h1>Sorting Visualizer</h1>
            <p>
              Made using: React, styled components. Visualizes alogirithms like
              bubble sort, merge sort, etc.
            </p>
            <a
              href="https://github.com/Suprada-2002/Sorting-Visualizer"
              target="_blank"
            >
              Source code
            </a>
            <br />
            <a
              href="https://suprada-2002.github.io/Sorting-Visualizer/"
              target="_blank"
            >
              Watch live
            </a>
          </div>

          {/*second card*/}
          <div className="project2 card">
            <img className="sv" src={Crude} alt="sorting visulaizer" />
            <h1>CRUD Application</h1>
            <p>
              Made using React, MongoDB. This is a CRUDE application and
              deployed using herokuapp.
            </p>
            <a
              href="https://github.com/Suprada-2002/CRUD-Application-using-Mongodb-and-Express"
              target="_blank"
            >
              Source code
            </a>
            <br />
            <a
              href="https://crud-application-using-mongo.herokuapp.com/"
              target="_blank"
            >
              Watch live
            </a>
          </div>

          {/*third card*/}
          <div className="project3 card">
            <img className="sv" src={Maze} alt="sorting visulaizer" />
            <h1>Maze Generation</h1>
            <p>
              Made using React.This is a visulaization of maze generation using
              DFS algorithim.
            </p>
            <a
              href="https://github.com/Suprada-2002/Maze-Generation-using-DFS"
              target="_blank"
            >
              Source code
            </a>
            <br />
            <a
              href="https://suprada-2002.github.io/Maze-Generation-using-DFS/"
              target="_blank"
            >
              Watch live
            </a>
          </div>

          {/*fourth card*/}
          <div className="project4 card">
            <img className="sv" src={Maze} alt="sorting visulaizer" />
            <h1>Maze Generation</h1>
            <p>
              Made using React.This is a visulaization of maze generation using
              DFS algorithim.
            </p>
            <a
              href="https://github.com/Suprada-2002/Maze-Generation-using-DFS"
              target="_blank"
            >
              Source code
            </a>
            <br />
            <a
              href="https://suprada-2002.github.io/Maze-Generation-using-DFS/"
              target="_blank"
            >
              Watch live
            </a>
          </div>
        </div>
        <div className="links">
          <a
            href="https://github.com/Suprada-2002?tab=repositories"
            target="_blank"
            className="other-project"
          >
            Check out other projects
          </a>
        </div>
      </Wrapper>
    </>
  );
};

export default Project;
