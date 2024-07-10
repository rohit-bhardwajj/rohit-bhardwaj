import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 w-full pt-3"
    >
      <nav className="flex justify-between max-w-fit gap-3 sm:gap-3 rounded-3xl bg-blue-900 shadow-lg p-1 sm:px-7 sm:py-2 border border-gray-700 mx-auto">
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          className="no-underline text-xl font-bold text-white cursor-pointer p-2 sm:p-0 hover:text-gray-300 active:text-black/30  transition-colors duration-10"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="technologies"
          smooth={true}
          duration={600}
          className="no-underline text-xl font-bold text-white cursor-pointer p-2 sm:p-0 hover:text-gray-300 active:text-black/30  transition-colors duration-10"
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={600}
          className="no-underline text-xl font-bold text-white cursor-pointer p-2 sm:p-0 hover:text-gray-300 active:text-black/30  transition-colors duration-10"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          className="no-underline text-xl font-bold text-white cursor-pointer p-2 sm:p-0 hover:text-gray-300 active:text-black/30  transition-colors duration-10"
        >
          Contact
        </ScrollLink>
      </nav>
    </motion.div>
  );
};

export default Navbar;
