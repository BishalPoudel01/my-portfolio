import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "../Header";
import SidebarComponent from "./Sidebar";
import GoTop from "../GoTop";
import { SocialIcons } from "./Socialicons";
import SectionDivider from "./Sectiondivider";
import About from "./About";
import Blog from "./Blog";

const Index = () => {
  return (
    <>
      <Header />
      <SidebarComponent />
      <SocialIcons />
      <Home />
      <About />
      <SectionDivider />
      <Skills />
      <Blog />
      <Projects />
      <Experience />
      <Contact />
      <GoTop />
    </>
    
  );
};

export default Index;
