'use client'


interface Experience {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "SacredMind Infotech",
    period: "December 2024 - Present",
    location: "Chandigarh",
    responsibilities: [
      "Working on a scalable Learning Management System (LMS) using React, Node.js, Prisma, and AWS for secure course content delivery via CloudFront SignedURL",
      "Razorpay payment integration, RBAC and modular course management",
    ]
  }
]

const WorkExperience = () => {
  return (
    <div className=" flex justify-center ">
      <div className="w-full max-w-3xl">
        <h2
          className={`text-3xl md:text-4xl font-extrabold`}
        >
          - work experience
        </h2>
        <div
          className="mt-4 space-y-8"
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-3"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold text-neutral-600 `}>{experience.title}</h3>
                  <p className={`text-neutral-500 `}>{experience.company}</p>
                </div>
                <span>
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-2 text-neutral-600">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className={`flex items-start `}>
                    <span className="mr-2">-</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
