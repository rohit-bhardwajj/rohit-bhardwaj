import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (

    <section className='nav'>
    <nav className="navbar">
      <div className="navbar-brand">
    ROHIT BHARDWAJ
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="theme-toggler" onClick={toggleTheme}>
        <img src={themeIcon} alt="Theme toggle icon" />
      </div>
    </nav>
    </section>
  );
}

export default Navbar;
