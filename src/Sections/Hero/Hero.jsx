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
import { motion } from "framer-motion";
// import { motion, useScroll, useSpring } from "framer-motion";

// Define delayprop as a constant
const delayprop = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay
    }
  }
});

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  const leetcodeIcon = theme === 'light' ? leetcodelight : leetcodedark;
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
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={delayprop(1)} // Use delayprop with delay 1 second
        >
          ROHIT <br /> BHARDWAJ
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={delayprop(1.5)} // Use delayprop with delay 1.5 seconds
        >
          FRONTEND DEVELOPER
        </motion.h2>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={delayprop(2)} // Use delayprop with delay 2 seconds
        >
          <a href="https://leetcode.com/rohitbhardwajj/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="leetcode logo" />
          </a>
          <a href="https://github.com/rohit-bhardwajj" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github logo" />
          </a>
          <a href="https://www.linkedin.com/in/rohittbhardwajj/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin logo" />
          </a>
        </motion.span>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={delayprop(2.5)} // Use delayprop with delay 2.5 seconds
          className={styles.description}
        >
          Passionate about modern web development and expanding my expertise, I am eager to leverage my skills in a dynamic environment.
        </motion.p>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={delayprop(3)} // Use delayprop with delay 3 seconds
          href={Resume}
          target='_blank' rel="noopener noreferrer"
        >
          <button className="hover">Resume</button>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
