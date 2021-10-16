import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
