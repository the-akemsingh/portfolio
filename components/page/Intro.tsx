'use client'

import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import Contact from './contact';

export default function Intro() {
  const typedText = useTypingEffect(['NextJs', 'MERN'], 100, 50, 1500);

  return (
    <div className={`min-h-screen flex flex-col text-white justify-center  items-center transition-colors duration-300 `}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-sm sm:text-base"
        >
          Hello, my name is
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          AKEMNOOR SINGH
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8 text-lg sm:text-xl"
        >
          Engineering undergrad, specializing in Electronics and Communication.
          <p className="font-semibold mt-2">
            I am proficient in <span className="text-blue-500">{typedText}</span>
          </p>
          <p className="mt-2">
            Currently seeking part-time or full-time opportunities.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className=""
      >
        <Contact></Contact>
      </motion.div>
    </div>
  );
}

