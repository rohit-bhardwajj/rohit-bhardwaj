import './App.css'
// import Experience from './Sections/Experiance/Experience';
import Hero from './Sections/Hero/Hero';
// import Navbar from './Sections/Navbar/Navbar';
import Projects from './Sections/Projects/Projects';
import Projects2 from './Sections/Projects2/Projects2';
import Technologies from './Sections/Technologies/Technologies';
// import Skills from './Sections/Skills/Skills';
import Contact from './Sections/contact/Contact';
import Footer from './Sections/footer/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
      <div>
        {/* <Navbar/> */}
        <div className="element">
               <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        </div>
      <Hero/>
      <Technologies/>
      {/* <Projects/> */}
      <Projects2/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App
