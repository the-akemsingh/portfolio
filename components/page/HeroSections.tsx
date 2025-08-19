import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroDesign {
  title: string
  description: string
  links: {
    demo?: string
  }
  videourl?: string
  imageurl?: string
}

const HeroDesigns: HeroDesign[] = [
  {
    title: "Travique",
    description: "A travel planning app",
    links: {
      demo: "https://travique.vercel.app/",
    },
    videourl: "/heroDesigns/travique.mp4"
  },
  {
    title: "EduRush",
    description: "An educational platform for students",
    links: {
      demo: "https://landing-pages-bice.vercel.app/course-selling-website",
    },
    videourl: "/heroDesigns/csw.mp4"
  },
  {
    title: "SecurePath",
    description: "All-in-one Platform for Compliance, Consent & Privacy",
    links: {
      demo: "https://secure-path-eight.vercel.app/",
    },
    videourl: "/heroDesigns/sky.mp4"
  },
  {
    title: "MindLoop",
    description: "Tools for deep work and clarity",
    links: {
      demo: "https://mind-loop-eosin.vercel.app/",
    },
    videourl: "/heroDesigns/mindloop.mp4"
  },
]

export default function FullStackProjects() {

  return (
    <div
      className="flex flex-wrap mt-5 justify-between"
    >
      {HeroDesigns.map((project, index) => (
        <div
          className='border-b p-5'
          key={index}
        >
          <div className='flex mt-5 gap-3 justify-between items-center' >
            <h3 className="text-xl font-bold">{project.title}</h3>

            <div className='flex gap-3' >
              {project.links.demo &&
                <Link href={project.links.demo || ""} target="_blank" className="text-gray-600 hover:underline flex gap-2">
                  Link <img src="/link.svg" alt="" />
                </Link>}
            </div>

          </div>
          <p className="text-sm mt-2 text-gray-600">{project.description}</p>
          {!project.videourl && (
            <img src={project.imageurl || ""} className='mt-2 rounded-xl ' alt="" />
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
