import React from "react";
import "../CSS/Skill.css";
import Grid from "@mui/material/Grid";
import reactIcon from "../../img/react.png";
import htmlIcon from "../../img/html.png";
import cssIcon from "../../img/css.png";
import sassIcon from "../../img/sass.png";
import jsIcon from "../../img/js.png";
import wordpressIcon from "../../img/wordpress.png";
import psIcon from "../../img/ps.png";
import figmaIcon from "../../img/figma.png";
import dbIcon from "../../img/db.png";
import muiIcon from "../../img/mui.png";
import gitIcon from "../../img/git.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { id: 1, tooltip: "React", value: 90, icon: reactIcon },
    { id: 2, tooltip: "HTML", value: 95, icon: htmlIcon },
    { id: 3, tooltip: "CSS 3", value: 90, icon: cssIcon },
    { id: 4, tooltip: "Sass", value: 80, icon: sassIcon },
    { id: 5, tooltip: "JavaScript", value: 80, icon: jsIcon },
    { id: 6, tooltip: "PHP", value: 50, icon: wordpressIcon },
    { id: 7, tooltip: "Adobe Photoshop", value: 75, icon: psIcon },
    { id: 8, tooltip: "Figma", value: 90, icon: figmaIcon },
    { id: 9, tooltip: "MongoDB", value: 75, icon: dbIcon },
    { id: 10, tooltip: "Material UI", value: 85, icon: muiIcon },
    { id: 11, tooltip: "Git", value: 80, icon: gitIcon },
  ];

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.5 },
    }),
  };

  return (
    <section id="skills" className="skills-section">
      <h5 className="section-title">Skills</h5>
      <Grid container spacing={2} className="skill-wrapper">
        {skills.map(({ id, tooltip, value, icon }, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
            <motion.div
              className="skill-item"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={fadeInAnimation}
            >
              <div className="skill-icon" aria-label={tooltip}>
                <img src={icon} alt={`${tooltip} icon`} />
              </div>
              <div
                className="skill-bar"
                style={{ width: `${value}%` }}
                aria-label={`${tooltip} skill level`}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
