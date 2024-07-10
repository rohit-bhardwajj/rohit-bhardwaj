import './App.css';
import Hero from './Sections/Hero/Hero';
import Navbar from './Sections/Navbar/Navbar';
import Projects2 from './Sections/Projects2/Projects2';
import Technologies from './Sections/Technologies/Technologies';
import Contact from './Sections/contact/Contact';
import Footer from './Sections/footer/Footer';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className="element">
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-normal"
      >
        <Navbar />
      </motion.div>
      <Hero />
      <Technologies />
      <Projects2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
