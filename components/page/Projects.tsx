'use client'

import { motion } from 'framer-motion'
import {  Github } from 'lucide-react'
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
      github: "https://github.com/the-akemsingh/Bach_Eats"
    },
    images: [
      "/images/1.jpg",

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
  {
    title: "VisionCraft",
    description: "Free AI image generation/download - no signup required",
    features: [
      "Used black-forest-labs/FLUX.1-dev model to generate images by Hugging Face",
      "No sign-up required, just generate images",
      "The user can also download the generated image",
     
    ],
    links: {
      demo: "https://free-image-generator-bice.vercel.app/",
      github: "https://github.com/the-akemsingh/Free-Image-Generator"
    },
    images: [
      "/images/5.jpg",
    ]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex  justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-3xl font-bold mt-20 ${TextFonts.JostFont.className}`}
        >
          MY WORK
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600"
                  >
                    {project.title} <br /> {project.features[0]}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.images[0]}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={`${project.title} thumbnail`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    {project.links.demo && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.demo}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal"
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
                        className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
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