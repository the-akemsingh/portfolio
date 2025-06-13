'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TextFonts from '@/app/fonts/fonts'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

interface Project {
  title: string
  description: string
  features: string[]
  links: {
    demo?: string
    github?: string
  }
  images: string[]
}

const projects: Project[] = [
  {
    title: "BachEats",
    description: "People can connect with others over a meal",
    features: [
      "Share your meal with peoples nearby",
      "Or join someone else for a meal"
    ],
    links: {
      demo: "https://bach-eats.vercel.app/",
      github: "https://github.com/the-akemsingh/Bach_Eats",
    },
    images: [
      "/images/1.jpg",
    ]
  },
  {
    title: "Chess",
    description: "Real-time multiplayer chess game",
    features: [
      "Play chess with your friends",
    ],
    links: {
      demo: "https://chess-sigma-fawn.vercel.app/",
      github: "https://github.com/the-akemsingh/Chess"
    },
    images: [
      "/images/chess.jpg",
    ]
  },
  {
    title: "Real Wisdom",
    description: "Blogging website",
    features: [
      "Express thoughts and ideas to the world",
    ],
    links: {
      demo: "https://medium-git-main-akemnoor-singhs-projects.vercel.app/",
      github: "https://github.com/the-akemsingh/AboveMedium"
    },
    images: [
      "/images/2.jpg",

    ]
  },
  {
    title: "Yap-Yap",
    description: "Real-time chat application",
    features: [
      "Start chat without logging in",
      "Share invite code and invite more people to the chat"
    ],
    links: {
      demo: "https://chat-app.akemnoorsingh.me/",
      github: "https://github.com/the-akemsingh/Chat-App"
    },
    images: [
      "/images/3.jpg",

    ]
  },
  {
    title: "PayMoney",
    description: "Payment app architecture implementation",
    features: [
      "Implemented the architecture of payment apps",
      "Developed a separate bank webhook server that updates balances of users",
      "The user completes a transaction, the webhook server is hit by bank that payment is received then the balances are updated",
    ],
    links: {
      github: "https://github.com/the-akemsingh/PayMoney"
    },
    images: [
      "/images/4.jpg",

    ]
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-3xl text-[#FFA2A3] font-bold mt-20 ${TextFonts.AzeretM.className}`}
        >
          MY WORK
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                  <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-neutral-600"
                  >
                    {project.title} {project.title === "BachEats" ? <Link href={"https://www.producthunt.com/products/bacheats"} target='_blank' className='text-xs text-orange-400 ml-2 ' > ProductHunt→ </Link> : null}
                    <br />
                    <span className="text-sm font-medium">{project.features[0]}</span>
                    <br />
                    {project.title === "BachEats" ? <div className='text-xs text-orange-400 mt-1'>
                      #121 daily rank on ProductHunt among 1000+ products
                    </div> : null}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs max-w-sm mt-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-3">
                    <Image
                      src={project.images[0]}
                      height="1000"
                      width="1000"
                      className="h-32 w-72 object-cover rounded-lg group-hover/card:shadow-xl"
                      alt={`${project.title} thumbnail`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-3">
                    {project.links.demo && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.demo}
                        target="__blank"
                        className="px-3 py-1 rounded-lg text-xs font-normal hover:bg-gray-100"
                      >
                        Demo →
                      </CardItem>
                    )}
                    {project.links.github && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.github}
                        target="__blank"
                        className="px-3 py-1 rounded-lg bg-black text-white text-xs font-bold hover:bg-gray-800"
                      >
                        GitHub
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}