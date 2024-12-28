"use client"

import { motion } from "framer-motion";
import TextFonts from "@/app/fonts/fonts";

export default function Achievements() {
  return (
    <div className="min-h-fit flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <motion.div className="flex-1">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-3xl font-bold mb-4 ${TextFonts.JostFont.className}`}
            >
              Achievements
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 mb-6"
            >
              Milestones I've accomplished along my journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 text-gray-700"
            >
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">InnoSprint Ideathon</h3>
                <p className="text-lg text-gray-600 mb-2">Chandigarh Group of Colleges Jhanjeri, S.A.S Nagar</p>
                <ul className="space-y-2">
                  <li>• Proposed an innovative solution to help hawkers enhance their business growth</li>
                  <li>• Ranked in the top 10 among 50 competing teams</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
