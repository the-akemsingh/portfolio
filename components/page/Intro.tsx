'use client'

import TextFonts from '@/app/fonts/fonts'
import { motion } from 'framer-motion'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'




export default function Intro() {
  const typedText = useTypingEffect(['MERN', 'T3'], 100, 50, 1500)

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  `}>
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <motion.div
            className="flex-1"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-5xl font-bold mb-2 ${TextFonts.JostFont.className}`}
            >
              AKEMNOOR SINGH 
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-2 text-gray-600 mb-6"
            >
              <span>singhakem03@gmail.com | Chandigarh, Punjab, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <Link href="https://x.com/akemnoor_singh" target='blank' className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/akemnoor-s-80a743204/" target='blank' className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/the-akemsingh" target='blank' className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/akemnoorsingh/" target='blank' className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 text-gray-700"
            >
              <p className="text-lg">
                Hello! I'm Akemnoor, an Engineering undergrad specializing in Electronics and Communication
                who can build full-stack web applications.
              </p>

              <ul className="space-y-3">
                <li>• Proficient in <span className="font-semibold">{typedText}</span> stack</li>
                <li>• Currently seeking part-time or full-time opportunities</li>
                <li>• Engineering student at CGC</li>
                <li>• Passionate about <span className={`text-xl ${TextFonts.YellowtailFont.className}`}> everything </span> </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-32 md:h-32 w-2 h-2 rounded-full overflow-hidden border-2 border-gray-200"
          >
            <Image src={`/images/pfp.jpg`} width={192} height={192} alt="pfp" ></Image>
          </motion.div> */}

        </div>
      </div>
    </div>
  )
}

