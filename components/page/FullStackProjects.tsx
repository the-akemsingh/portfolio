import React from 'react'
import Link from 'next/link'
import { Github , Link2Icon } from 'lucide-react'

interface Project {
    title: string
    description: string
    features: string[]
    links: {
        demo?: string
        github?: string
    }
    images?: string
    videourl?: string
    productHunt?: {
        link: string,
        description: string
    }
}

const projects: Project[] = [
    {
        title: "BachEats",
        description: "Meet new people over a meal at your personal space",
        features: [
            "Share your meal with peoples nearby",
            "Or join someone else for a meal"
        ],
        links: {
            demo: "https://bach-eats.vercel.app/",
            github: "https://github.com/the-akemsingh/Bach_Eats",
        },
        videourl: "/project/BE.mp4",

    },
    {
        title: "Chess",
        description: "Real-time 2D multiplayer chess game",
        features: [
            "Play chess with your friends",
        ],
        links: {
            demo: "https://chess-sigma-fawn.vercel.app/",
            github: "https://github.com/the-akemsingh/Chess"
        },
        images: "/project/chess.png",
    },
    {
        title: "Wisdom",
        description: "Blogging website",
        features: [
            "Express thoughts and ideas to the world",
        ],
        links: {
            demo: "https://medium-git-main-akemnoor-singhs-projects.vercel.app/",
            github: "https://github.com/the-akemsingh/AboveMedium"
        },
        images: "/project/wisdom.png",
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
    },
    {
        title: "PayMoney",
        description: "P2P Payment architecture simulation",
        features: [
            "Implemented the architecture of payment apps",
            "Developed a separate bank webhook server that updates balances of users",
            "The user completes a transaction, the webhook server is hit by bank that payment is received then the balances are updated",
        ],
        links: {
            github: "https://github.com/the-akemsingh/PayMoney"
        },
    },
]

export default function FullStackProjects() {

    return (
        <div
            className="flex flex-wrap mt-5 justify-between"
        >
            {projects.map((project, index) => (
                <div
                    className='border border-gray-100 shadow-sm m-2 rounded-xl p-5'
                    key={index}
                >
                    <div className='flex mt-5 gap-3 justify-between items-center' >
                        <h3 className="text-xl font-bold">{project.title}</h3>

                        <div className='flex gap-5' >
                            {project.links.demo &&
                                <Link href={project.links.demo || ""} target="_blank" className="text-gray-600 hover:underline flex gap-2">
                                    {/* <img className='hover:text-yellow-600' src="/link.svg" alt="" /> */}
                                <Link2Icon className='hover:text-yellow-600' />
                                </Link>}
                            <Link href={project.links.github || ""} target="_blank" className="text-gray-600 hover:underline flex gap-2">
                                <Github className='hover:text-yellow-600' />
                            </Link>
                        </div>

                    </div>
                    <p className="text-sm mt-2 text-gray-600">{project.description}</p>
                    {!project.videourl && (
                        <img src={project.images || ""} className='mt-2 rounded-xl ' alt="" />
                    )}
                    {project.videourl && (
                        <video
                            className="mt-2 rounded-xl "
                            autoPlay
                            loop
                            muted
                            src={project.videourl}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
