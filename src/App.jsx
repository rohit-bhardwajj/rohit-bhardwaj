import './App.css'
// import Experience from './Sections/Experiance/Experience';
import Hero from './Sections/Hero/Hero';
// import Navbar from './Sections/Navbar/Navbar';
import Projects from './Sections/Projects/Projects';
import Technologies from './Sections/Techonologies/Technologies';
// import Skills from './Sections/Skills/Skills';
import Contact from './Sections/contact/Contact';
import Footer from './Sections/footer/Footer';

function App() {
 

  return (
      <>
      {/* <Navbar/> */}
      <Hero/>
      <Technologies/>
      {/* <Experience/> */}
      <Projects/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App
