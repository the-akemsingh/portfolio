'use client'


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
  { src: "/images/css.svg", alt: "css", label: "CSS" },
  { src: "/images/redis.svg", alt: "redis", label: "Redis" }
]

export default function Skills() {
  return (
    <div className=" flex items-center mb-10 justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div
          className="flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <div className="flex-1">
            <h2
              className="text-3xl md:text-4xl font-extrabold "
            >
              - skills
            </h2>

            <p
              className={`font-semibold mb-6`}
            >
              A comprehensive list of my technical proficiencies.
            </p>

            <div
              className="flex flex-wrap gap-5"
            >
              {skills.map(({ src, alt, label }, index) => (
                <div
                  key={alt}
                >
                  <span className={`mt-2 text-sm text-[#111111]  px-1.5 py-1 rounded-lg bg-gray-300 group-hover:text-gray-900 transition-colors duration-300`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
