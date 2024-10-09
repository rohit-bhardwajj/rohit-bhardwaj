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
import { RiShareForwardBoxFill } from "react-icons/ri";


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
const delayprop2 = (delay) => ({
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
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
  const githubIcon =  githubdark;
  const linkedinIcon =  linkedindark;
  const leetcodeIcon =  leetcodedark;

  return (
    <section id="home" className={styles.container}>
      <motion.div initial={{x:100 ,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, delay:1.2}} className={styles.colorModeContainer}>
        <img className={`border-4 rounded-full border-gray-700 ${styles.hero}`} src={heroimg} alt="Profile picture" />
      </motion.div>
      <div className={styles.info}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={delayprop(1)} // Use delayprop with delay 1 second
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          ROHIT <br /> sharma
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          className='font-normal '
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
          className={` ${styles.description}`}
        >
          Passionate about modern web development and expanding my expertise, I am eager to leverage my skills in a dynamic environment.
        </motion.p>
        <div className="flex gap-5 justify-center">
          {/* <motion.a
            initial="hidden"
            animate="visible"
            variants={delayprop2(3)} // Use delayprop with delay 3 seconds
            href={Resume}
            target='_blank' rel="noopener noreferrer"
          >
            <button className="bg-[#181818] border-[#484848] border-solid max-sm:py-3 max-sm:px-2 text-white font-semibold py-3 px-3 shadow-md rounded-full hover:bg-black flex items-center justify-center space-x-2">
              View Résumé <br /> <RiShareForwardBoxFill />

            </button>
          </motion.a> */}

          <motion.a
            initial="hidden"
            animate="visible"
            variants={delayprop2(3)} // Use delayprop with delay 3 seconds
            href="https://www.linkedin.com/in/rohittbhardwajj" // Adjust this if needed
            target='_blank' rel="noopener noreferrer"
          >
            <button className="btn btn-secondary bg-[#181818] border-[#484848] border-solid text-white font-semibold  py-3 px-3 rounded-full shadow-md flex items-center justify-center space-x-2 max-sm:py-3 max-sm:px-2">
              Let's Connect
              <span role="img" aria-labelledby="wave" className={` wave ${styles.wave}`}>👋🏻</span>
            </button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
