import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "../components/CSS/GoTop.css"; 

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      // Show button after scrolling 200px
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="go-to-top"
          onClick={scrollToTop}
          aria-label="Go to Top"
        >
          <BiArrowToTop />
        </button>
      )}
    </>
  );
};

export default GoTop;
