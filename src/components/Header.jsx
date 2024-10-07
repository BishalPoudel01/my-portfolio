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
     <nav className="header-left" aria-label="Portfolio navigation">
  <span className="logo">
    <span className="logo-text">Bishal</span>
    <BsSlashLg className="slash" />
    <span className="logo-text">Portfolio</span>
  </span>
</nav>
      <div className="header-right">
        <div className="theme-switch-wrapper" aria-label="Toggle theme switch">
          <label className="theme-switch" htmlFor="theme-toggle">
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
              aria-label="Toggle theme"
            />
            <span className="slider round">
              {theme === "dark" ? (
                <FaMoon className="icon moon-icon" aria-hidden="true" />
              ) : (
                <FaSun className="icon sun-icon" aria-hidden="true" />
              )}
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
