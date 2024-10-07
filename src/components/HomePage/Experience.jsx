import React from "react";
import "../CSS/Experience.css";
import NMIC from "../../img/NMIC.jpg";
import STN from "../../img/Skillnep.png";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Data for experiences
const experiencesData = [
  {
    img: NMIC,
    name: "Nepal Micro Insurance",
    link: "https://nepalmicro.com/en/",
    date: "Oct 2021 - Present",
    title: "Digital Marketer",
    description: "Contributed my skills in the Digital Marketing Course during my tenure.",
  },
  {
    img: STN,
    name: "Skill Training Nepal",
    link: "https://skilltrainingnepal.com/",
    date: "April 2022 - June 2023",
    title: "Digital Marketer",
    description: "Successfully completed the Digital Marketing Course from Skill Training Nepal Pvt. Ltd.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className="experience__title">Experience</h1>

      <VerticalTimeline>
        {experiencesData.length > 0 ? (
          experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              iconStyle={iconStyle}
              icon={renderIcon(item.img, item.name)}
            >
              <div className="timeline-item-content">
                <header className="timeline-item-header">
                  <h2 className="timeline-item-title">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} website`}>
                      {item.name}
                    </a>
                  </h2>
                  <h3 className="timeline-item-subtitle">{item.title}</h3>
                </header>
                <p className="timeline-item-description">{item.description}</p>
              </div>
            </VerticalTimelineElement>
          ))
        ) : (
          <p>No experiences to display.</p>
        )}
      </VerticalTimeline>
    </section>
  );
};

// Helper function to render the icon
const renderIcon = (imgSrc, altText) => (
  <img
    src={imgSrc}
    alt={altText}
    className="timeline-icon"
  />
);

// Icon style configuration
const iconStyle = {
  background: "transparent",
  border: "none",
};

export default Experience;
