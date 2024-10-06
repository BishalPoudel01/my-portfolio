import React from "react";
import "../CSS/Project.css";
import { GoGlobe } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import tictactoe from "../../img/tictactoe.png";
import easyOffice from "../../img/easyOffice.png";
import cooperative from "../../img/cooperative.png";
import reactIcon from "../../img/react.png";
import htmlIcon from "../../img/html.png";

// Project Data
const projects = [
  {
    id: 3,
    img: tictactoe,
    title: "Tic Tac Toe",
    desc: "A Tic Tac Toe game with single and multiplayer modes.",
    web: "https://subham-tandukar-games.netlify.app/",
    git: "https://github.com/subham-tandukar/tic-tac-toe",
    icons: [
      { src: reactIcon, alt: "React" },
    ],
  },
  {
    id: 1,
    img: easyOffice,
    title: "Easy Software",
    desc: "Website designed for a software company using HTML, CSS, and JavaScript.",
    web: "https://easysoftware.com.np/",
    git: "https://github.com/subham-tandukar/easy-software",
    icons: [
      { src: htmlIcon, alt: "HTML" },
    ],
  },
  {
    id: 2,
    img: cooperative,
    title: "Cooperative",
    desc: "A website for a cooperative office using HTML, CSS, JavaScript, and PHP.",
    web: "http://sundevicoop.com/",
    git: "https://github.com/subham-tandukar/cooperative",
    icons: [
      { src: htmlIcon, alt: "HTML" },
    ],
  },
];

const handleViewMore = () => {
  console.log("View More clicked!");
};

const Projects = () => {
  return (
    <div id="projects" className="uk-container projects">
      <div>
        <h5 className="txt">My Projects</h5>
      </div>
      <div className="learn-more">
        <button className="learn-more-btn" onClick={handleViewMore}>View More</button>
      </div>

      <div className="project-wrapper">
        <div className="uk-container uk-container-expand">
          <div
            className="uk-grid uk-child-width-1-3@l uk-child-width-1-2@s"
            uk-scrollspy="cls: uk-animation-slide-bottom; target: .wrapper; delay: 300; repeat: false"
          >
            {projects.map((props) => {
              const { id, img, title, desc, web, git, icons } = props;
              return (
                <div className="wrapper" key={id}>
                  <div className="project-content">
                    <div className="project-swiper">
                      <img src={img} alt={title} className="project-img" />
                      <div className="project-bg"></div>
                      <div className="project-link">
                        <div className="web" uk-tooltip="title: Website">
                          <a href={web} target="_blank" rel="noreferrer">
                            <GoGlobe color="#03041c" size="2rem" />
                          </a>
                        </div>

                        {git && (
                          <div className="git" uk-tooltip="title: Github">
                            <a href={git} target="_blank" rel="noreferrer">
                              <BsGithub color="#03041c" size="2rem" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <h5>{title}</h5>
                    <span>{desc}</span>
                    <div style={{ padding: "1rem" }}>
                      {icons.map((icon, index) => (
                        <img key={index} className="project-icon" src={icon.src} alt={icon.alt} loading="lazy" uk-tooltip={icon.alt} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
