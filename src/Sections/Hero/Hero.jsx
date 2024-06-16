import React from "react";
import styles from "./Hero.module.css";
import heroimg from "../../assets/rohit-bhardwaj.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import leetcodelight from "../../assets/leetcode-light.svg";
import leetcodedark from "../../assets/leetcode-dark.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import Resume from "../../assets/Rohit_kumar_210303105188.pdf";
import { useTheme } from '../../common/ThemeContext';

export default function Hero() {
    const {theme,toggleTheme} = useTheme();
    const themeIcon = theme === 'light'? sun : moon; 
    const githubIcon = theme === 'light'? githublight :githubdark; 
    const linkedinIcon = theme === 'light'?linkedinlight : linkedindark; 
    const leetcodeIcon = theme === 'light'? leetcodelight : leetcodedark; 
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroimg} alt="Profile picture" />
        <img
          src={themeIcon}
          alt="Color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rohit <br /> Bhardwaj
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://leetcode.com/rohitbhardwajj/" target="_blank">
            <img src={leetcodeIcon} alt="leetcode logo" />
          </a>
          <a href="https://github.com/rohit-bhardwajj" target="_blank">
            <img src={githubIcon} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohittbhardwajj/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin logo" />
          </a>
        </span>
        <p className={styles.description}>
            With a Passion for Learning New Technologies and developing the skills
        </p>
        <a href={Resume} target='_blank' >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
