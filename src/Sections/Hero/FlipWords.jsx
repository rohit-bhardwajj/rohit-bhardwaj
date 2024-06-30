import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div style={{ display: 'inline-block', position: 'relative', minWidth: '100px', minHeight: '1em' }}>
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          key={currentWord}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
          }}
          style={{ position: 'absolute', whiteSpace: 'nowrap' }}
          className={className}
        >
          {currentWord.split(",").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
