'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import TextFonts from '@/app/fonts/fonts'

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
  { src: "/images/postman.svg", alt: "postman", label: "Postman" },
  { src: "/images/nginx.svg", alt: "nginx", label: "Nginx" },
  { src: "/images/aws.svg", alt: "aws", label: "AWS" },
  { src: "/images/websockets.svg", alt: "websockets", label: "WebSockets" },
  { src: "/images/html.svg", alt: "html", label: "HTML" },
  { src: "/images/css.svg", alt: "css", label: "CSS" }
]

export default function Skills() {
  return (
    <div className="min-h-fit mt-24 mb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
              className={`text-3xl font-bold mb-2 ${TextFonts.JostFont.className}`}
            >
              Skills
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 mb-6"
            >
              A comprehensive list of my technical proficiencies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
            >
              {skills.map(({ src, alt, label }, index) => (
                <motion.div
                  key={alt}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative group flex flex-col items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={alt}
                    height={48}
                    width={48}
                    className="transition-transform duration-300 group-hover:scale-125"
                    sizes="(max-width: 640px) 30px, (max-width: 768px) 40px, 48px"
                  />
                  <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>      
    </div>
  )
}
