'use client'

import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=" flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 mb-8"
        >
          Milestones I've accomplished.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl mb-2">InnoSprint Ideathon</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-2">Chandigarh Group of Colleges Jhanjeri, S.A.S Nagar</p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
              <li>Proposed an innovative solution to help hawkers enhance their business growth</li>
              <li>Ranked in the top 10 among 50 competing teams</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
