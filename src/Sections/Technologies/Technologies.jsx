import './Technologies.css';
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { motion } from 'framer-motion';

// Define iconVariants as a constant
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { y: [10, -10] ,
  transition: {
    duration: duration,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'reverse',
  },
},
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          className='rounded-2xl border-solid border-4 border-neutral-800 p-4 dark:bg-transparent'
          variants={iconVariants(2.5)} // Set the duration for the animation
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className='text-7xl text-[#61DAFB]' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-solid border-4 border-neutral-800 p-4'
          variants={iconVariants(4)} // Set the duration for the animation
          initial="initial"
          animate="animate"
        >
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-solid border-4 border-neutral-800 p-4'
          variants={iconVariants(5)} // Set the duration for the animation
          initial="initial"
          animate="animate"
        >
          <RiJavascriptLine className='text-7xl text-[#F7DF1E]' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-solid border-4 border-neutral-800 p-4'
          variants={iconVariants(7)} // Set the duration for the animation
          initial="initial"
          animate="animate"
        >
          <SiTailwindcss className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          className='rounded-2xl border-solid border-4 border-neutral-800 p-4'
          variants={iconVariants(6)} // Set the duration for the animation
          initial="initial"
          animate="animate"
        >
          <DiJava className='text-7xl text-cyan-400' />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
