'use client'

import { useState } from 'react'
import FullStackProjects from './FullStackProjects'
import HeroSections from './HeroSections'


export default function Projects() {
  const [fullStack, setFullStack] = useState(true);
  const [heroSections, setHeroSections] = useState(false);
  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div className='flex flex-col md:flex-row justify-between gap-3 md:gap-10 mt-10 ' >
          <h2
            className={`text-3xl md:text-4xl font-extrabold `}
          >
            - my work
          </h2>
          <div className='flex font-bold gap-3 text-sm ' >
            <button className={` ${fullStack ? 'text-yellow-600 underline' : ''} `}
              onClick={() => { setFullStack(true); setHeroSections(false); }} >
              Full Stack
            </button>
            <button className={` ${heroSections ? 'text-yellow-600 underline' : ''} `}
              onClick={() => { setHeroSections(true); setFullStack(false); }} >
              Hero Sections
            </button>
          </div>
        </div>

        {fullStack && <FullStackProjects />}
        {heroSections && <HeroSections />}

      </div>
    </div>
  )
}