'use client'

import { motion } from 'framer-motion'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Github, Instagram, Linkedin, Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import TextFonts from '@/app/fonts/fonts'

export default function Intro() {
  const typedText = useTypingEffect(['MERN', 'T3'], 100, 50, 1500)

  return (
    <div className="flex text-gray-300 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <motion.div className="flex-1">
            <div className='flex items-center gap-2 mb-4'>
              <span className="flex-shrink-0">
                <motion.img
                  src="/images/1.jpg"
                  alt="Akemnoor Singh"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                />
              </span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={`text-xl text-[#FFA2A3] sm:text-2xl md:text-3xl ${TextFonts.AzeretM.className}`}
              >
                AKEMNOOR SINGH <br />
                <span className='text-xs sm:text-sm'>singhakem03@gmail.com | Chandigarh, Punjab, India</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <Link
                href="https://x.com/akemnoor_singh"
                target="_blank"
                className=" hover:text-gray-900"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/akemnoor-s-80a743204/"
                target="_blank"
                className=" hover:text-gray-900"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/the-akemsingh"
                target="_blank"
                className=" hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/akemnoorsingh/"
                target="_blank"
                className=" hover:text-gray-900"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@AkmJustStarted"
                target="_blank"
                className=" hover:text-gray-900"
              >
                <YoutubeIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`space-y-4  text-sm sm:text-base ${TextFonts.Azeret.className} `}
            >
              <p className='flex gap-2'>
                <p className='text-yellow-600'>
                  A Software Developer,
                </p>
                <p>
                  Film-maker
                </p>
                <p>
                  & A passionate learner.
                </p>
              </p>

              <ul className="space-y-3">
                <li>
                  • Proficient in{' '} <span className="font-semibold">{typedText}</span> stack
                </li>
                <li>
                  • Passionate about{' '}
                  <span
                    className={`text-lg sm:text-xl text-yellow-600 ${TextFonts.YellowtailFont.className}`}
                  >
                    everything
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}