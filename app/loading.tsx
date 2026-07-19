"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "procrastination", "distraction", "inefficiency", "inconsistency", "indecision", "demotivation",
  "procrastination", "distraction", "inefficiency", "inconsistency", "indecision", "demotivation",
  "procrastination", "demotivation", "inconsistency", "distraction", "demotivation",
  "procrastination", "demotivation", "inconsistency", "distraction"
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [filled, setFilled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [showVectr, setShowVectr] = useState(false);

  useEffect(() => {
    const fillTimeout = setTimeout(() => setFilled(true), 1000);
    return () => clearTimeout(fillTimeout);
  }, []);

  useEffect(() => {
    if (filled) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            clearInterval(interval);
            setTimeout(() => setShowVectr(true), 200);
            return prev;
          }
          return prev + 1;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [filled]);

  useEffect(() => {
    if (showVectr) {
      const doneTimeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(doneTimeout);
    }
  }, [showVectr]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center text-white font-mono text-xl tracking-wide relative overflow-hidden">
      {filled && (
        <motion.div
          className="absolute bg-purple-500 rounded-full z-0"
          initial={{ width: "100vmin", height: "100vmin", opacity: 0.1, scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative w-48 h-48 z-20">
        <svg className="w-full h-full transform rotate-[-90deg] absolute z-10">
          <circle cx="96" cy="96" r="80" stroke="#4b5563" strokeWidth="16" fill="none" />
          <motion.circle
            cx="96"
            cy="96"
            r="80"
            stroke="#9333ea"
            strokeWidth="16"
            fill="none"
            strokeDasharray={502}
            strokeDashoffset={502}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>

        {filled && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-600 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center z-30 text-center">
          <AnimatePresence mode="wait">
            {filled && !showVectr && currentWordIndex >= 0 && (
              <motion.div
                key={words[currentWordIndex] + currentWordIndex}
                className="text-white text-4xl line-through"
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {words[currentWordIndex]}
              </motion.div>
            )}
          </AnimatePresence>

          {showVectr && (
            <motion.div
              className="text-white text-4xl font-bold absolute z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 2.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Vectr.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
