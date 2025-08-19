'use client'

import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";
import { Card } from "../ui/card";

const contact = {
  email: null,
  social: [
    {
      name: "GitHub",
      handle: null,
      url: "https://github.com/the-akemsingh",
      icon: GitHubIcon,
      iconEmoji: null,
      description: "Code repositories for my projects & personal tools"
    },
    {
      name: "LinkedIn",
      handle: null,
      url: "https://www.linkedin.com/in/akemnoor-s-80a743204/",
      icon: LinkedInIcon,
      iconEmoji: null,
      description: "My résumé"
    },
    {
      name: "X.com / Twitter",
      handle: "@akemnoor_singh",
      url: "https://x.com/akemnoor_singh",
      icon: XIcon,
      iconEmoji: null,
      description: "Documenting my journey"
    },
    {
      name: "Instagram",
      handle: "@akemnoorsingh",
      url: "https://instagram.com/akemnoorsingh",
      icon: InstagramIcon,
      iconEmoji: null,
      description: "Just for fun"
    }
  ]
}

export default function Intro() {

  return (
    <div className="flex flex-col mt-10 items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-col">

            <div className='flex flex-col gap-2 mb-4'>
              <span className='text-white flex gap-2 bg-green-700 text-sm py-0.5 px-1.5 rounded-2xl max-w-[150px]'>
                <span className="inline-flex items-center gap-1">
                  <span className="bg-white h-2 w-2 rounded-full animate-pulse"></span>
                </span>
                <span>
                  availabe for work
                </span>
              </span>
              <h1
                className={`text-4xl md:text-5xl font-extrabold lowercase tracking-tight`}
              >
                Akemnoor S.
              </h1>
              <div className='flex text-xs sm:text-sm text-gray-500 gap-2 items-center' >
                <span className=''> singhakem03@gmail.com | </span>
                <GlobeIcon className="size-3" />
                <span>Chandigarh, India</span>
              </div>
            </div>

            <div className={`  text-base font-semibold `}>
              <p className='flex flex-col gap-2'>
                <p className=''>
                  - Software Developer,
                  & freelancer
                </p>
                <p className="">
                  - Proficient in Node.js + TypeScript, Next.js and AWS.
                </p>
              </p>
            </div>

            <div className='flex flex-row flex-wrap mt-2 items-start justify-start gap-2 max-w-full'>
              {contact.social.map((social) => (
                <Card key={social.name} className="w-fit text-sm min-w-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 bg-white/80 backdrop-blur-sm">
                  <a href={social.url} className="flex items-center justify-center p-3 group" target="_blank" rel="noopener noreferrer">
                    {social.iconEmoji ? (
                      <span className="text-[20px] flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{social.iconEmoji}</span>
                    ) : (
                      <social.icon className="size-[20px] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    )}
                    {/* <div className="flex-1 text-left min-w-0">
                      <h3 className='font-semibold'>
                        {social.handle && (
                          <span className='ml-2 group-hover:text-gray-700 transition-colors duration-200'>
                            {social.handle}
                          </span>
                        )}
                      </h3>
                    </div> */}
                  </a>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}