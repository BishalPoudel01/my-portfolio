import React from "react";
import "../CSS/Experience.css";
import NMIC from "../../img/NMIC.jpg";
import STN from "../../img/Skillnep.png";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
      <h1 className="txt">Experience</h1>

      <VerticalTimeline>
        {experiencesData.length > 0 ? (
          experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              iconStyle={{
                background: "transparent", // Set background to transparent
                border: "none", // Remove border
              }}
              icon={
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '60px', // Adjust width as necessary
                    height: '60px', // Adjust height as necessary
                    borderRadius: '50%', // Ensure it's round
                    objectFit: 'cover', // Cover to fill the circle
                  }}
                />
              }
            >
              <div className="timeline-item-content">
                <div className="exp__head">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} website`}>
                  </a>
                  <div>
                    <h2 className="exp__head__title">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} website`}>
                        {item.name}
                      </a>
                    </h2>
                    <h3 className="exp__title">{item.title}</h3>
                  </div>
                </div>
                <p className="exp__desc">{item.description}</p>
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

export default Experience;
