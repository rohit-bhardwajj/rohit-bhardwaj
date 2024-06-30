import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (

     <section>
       <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Logo</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#projects">Projects</a></li>
          <li className="navbar-item"><a href="#experience">Experience</a></li>
          <li className="navbar-item"><button onClick={handleThemeToggle}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button></li>
        </ul>
      </div>
    </nav>     </section>
  );
}

export default Navbar;
