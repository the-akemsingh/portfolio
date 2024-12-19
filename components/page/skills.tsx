'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

const skills = [
  { src: "/images/cpp.svg", alt: "c++", label: "C++" },
  { src: "/images/js.svg", alt: "javaScript", label: "JavaScript" },
  { src: "/images/ts.svg", alt: "typeScript", label: "TypeScript" },
  { src: "/images/postgres.svg", alt: "postgresSql", label: "PostgreSQL" },
  { src: "/images/mongodb.svg", alt: "mongodb", label: "MongoDB" },
  { src: "/images/prisma.svg", alt: "prismaORM", label: "Prisma" },
  { src: "/images/node.svg", alt: "nodejs", label: "Node.js" },
  { src: "/images/express.svg", alt: "expressjs", label: "Express.js" },
  { src: "/images/react.svg", alt: "reactjs", label: "React" },
  { src: "/images/next.svg", alt: "nextjs", label: "Next.js" },
  { src: "/images/tailwind.svg", alt: "tailwindCSS", label: "TailwindCSS" },
  { src: "/images/git.svg", alt: "git", label: "Git" },
  { src: "/images/github.svg", alt: "github", label: "GitHub" },
  { src: "/images/postman.svg", alt: "postman", label: "Postman" }
]

export default function Skills() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 mb-8"
        >
          A list of my technical proficiencies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {skills.map(({ src, alt, label }, index) => (
            <motion.div
              key={alt}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="relative group flex items-center justify-center"
            >
              <Image
                src={src}
                alt={alt}
                height={48}
                width={48}
                className="transition-transform duration-300 group-hover:scale-125"
              />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

