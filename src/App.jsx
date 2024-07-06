import './App.css';
import Hero from './Sections/Hero/Hero';
import Projects from './Sections/Projects/Projects';
import Technologies from './Sections/Technologies/Technologies';
import Contact from './Sections/contact/Contact';
import Footer from './Sections/footer/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
     
      {/* <Navbar/> */}
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
