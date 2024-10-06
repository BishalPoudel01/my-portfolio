import React, { useRef } from "react";
import "../CSS/Home.css"; 
import { BiArrowFromLeft, BiDownload } from "react-icons/bi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import bwmap from "../../img/bw-map.png"; 
import worldmap from "../../img/world-map.png";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import profile from "../../img/OGM.png";

// Main Home Component
const Home = () => {
  const textToSpeakRef = useRef("Hi, I'm Bishal. Welcome to my portfolio!");

  return (
    <>
      <BackgroundImage />
      <section className="relative flex flex-col items-center justify-center w-full h-screen mx-auto text-center overflow-hidden">
        <div className="z-10 text-eerieBlack font-poppins">
          <ProfileSection textToSpeakRef={textToSpeakRef} />
          <h1 className="uppercase">
            Hi, I'm{' '}
            <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
              Bishal
            </span>
          </h1>
          <TypewriterComponent />
        </div>
        <div className="btn-row">
          <div>
            <a href="#contact" className="btn">
              Contact me here <BiArrowFromLeft className="btn-icon" />
            </a>
            <a className="btn" href="./CV.pdf" download>
              Download CV <BiDownload className="btn-icon" />
            </a>
          </div>
        </div> 
        <ScrollIndicator />
      </section>
    </>
  );
};

// Profile Section Component
const ProfileSection = ({ textToSpeakRef }) => {
  const speakText = () => {
    if (typeof SpeechSynthesisUtterance !== "undefined") {
      const utterance = new SpeechSynthesisUtterance(textToSpeakRef.current);
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };
      speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser.");
    }
  };

  return (
    <div className="profile__wrapper">
      <img
        src={profile}
        alt="Profile of Bishal"
        width="192"
        height="192"
        className="profile"
      />
      <motion.div
        className="profile__icon tooltip"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 125, delay: 0.5, duration: 0.7 }}
        onClick={speakText}
        role="button"
        aria-label="Speak introduction" // Updated to improve accessibility
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && speakText()}
      >
        <div className="speaker__bar">
          <PiSpeakerSimpleHighFill size="1.5rem" />
        </div>
      </motion.div>
    </div>
  );
};

// Typewriter Component
const TypewriterComponent = () => (
  <div className="typewriter-text">
    <Typewriter
      options={{
        strings: ["Digital Marketer", "Graphic Designer"],
        autoStart: true,
        loop: true,
      }}
    />
  </div>
);

// Background Image Component
const BackgroundImage = () => {
  const theme = localStorage.getItem("theme") || "light";
  
  return (
    <div className="bg">
      <img
        src={theme === "dark" ? bwmap : worldmap}
        alt={theme === "dark" ? "Black and white world map" : "Colored world map"}
        className="bg-img"
      />
    </div>
  );
};

// Scroll Down Indicator Component
const ScrollIndicator = () => (
  <div className="scroll-indicator">
    <div className="arrow" />
    <div className="arrow" />
    <div className="scroll-text">Scroll</div>
  </div>
);

export default Home;
