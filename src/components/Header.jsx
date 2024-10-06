import React from "react";
import { FaChevronLeft, FaChevronRight, FaSun, FaMoon } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";
import "../components/CSS/Header.css";  

const Header = ({ setTheme, theme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme); 
    document.body.classList.toggle("theme-dark", newTheme === "dark");
  };

  return (
    <header className={`header-container ${theme === "dark" ? "header-dark" : "header-light"}`}>
      <div className="header-left">
        <FaChevronLeft color="#03041c" size="2rem" />
        
        <span className="gradient">
          Bishal <BsSlashLg className="slash" /> Portfolio
        </span>
        
        <FaChevronRight color="#03041c" size="2rem" />
      </div>

      <div className="header-right">
        <div className="theme-switch-wrapper" aria-label="Toggle theme switch">
          <label className="theme-switch" aria-checked={theme === "dark"}>
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider round">
              {theme === "dark" ? (
                <span className="icon moon-icon" aria-hidden="true">
                  <FaMoon />
                </span>
              ) : (
                <span className="icon sun-icon" aria-hidden="true">
                  <FaSun />
                </span>
              )}
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
