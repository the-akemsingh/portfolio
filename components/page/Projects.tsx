'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
      "/images/BEhome.jpg",
      "/images/BEsignup.jpg",
      "/images/BEinvite.jpg",
      "/images/BEcreateinvite.jpg"
    ]
  },
  {
    title: "Above Medium",
    description: "Blogging website",
    features: [
      "User sign-up using email",
      "User has the functionality to post and view blogs posted by other users"
    ],
    links: {
      demo: "https://medium-git-main-akemnoor-singhs-projects.vercel.app/",
      github: "https://github.com/the-akemsingh/AboveMedium"
    },
    images: [
      "/images/Welcome.jpg",
      "/images/SignUp.jpg",
      "/images/Signin.jpg",
      "/images/Home.jpg"
    ]
  },
  {
    title: "Chat-App",
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
      "/images/ChatHome.jpg",
      "/images/JoinRoom.jpg",
      "/images/Chatbox.jpg"
    ]
  },
  {
    title: "PayMoney",
    description: "Payment app architecture implementation",
    features: [
      "Implemented the architecture of how payment apps works",
      "Developed a separate bank webhook server that updates balances of users",
      "The user completes a transaction, the webhook server is hit by bank that payment is received then the balances are updated",
    ],
    links: {
      github: "https://github.com/the-akemsingh/PayMoney"
    },
    images: [
      "/images/Welcome12.jpg",
      "/images/transactions.jpg",
      "/images/p2p.jpg",
      "/images/addmoney.jpg"
    ]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-8"
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-4">
                  {/* Project Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <p key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.links.demo && (
                      <Link 
                        href={project.links.demo}
                        className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Link>
                    )}
                    {project.links.github && (
                      <Link 
                        href={project.links.github}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                    )}
                  </div>

                  {/* Project Images */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {project.images.map((image, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${i + 1}`}
                          width={500}
                          height={300}
                          className="rounded-lg shadow-lg object-cover w-full h-40 md:h-52"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

