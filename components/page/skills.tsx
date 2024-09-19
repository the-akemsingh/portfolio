import Image from "next/image";

export default function Skills() {
    return (
        <div className="bg-[#0A0A0A] flex flex-col pt-48 pb-48 text-white">
            <div className="text-4xl pl-44">SKILLS</div>
            <div className="pl-44 mt-4 text-lg">A list of my technical proficiencies.</div>
            <div className="pl-44 flex justify-center gap-4 mt-20">
                {[
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
                    { src: "/images/postman.svg", alt: "postman", label: "Postman" }
                ].map(({ src, alt, label }) => (
                    <div key={alt} className="relative group flex items-center justify-center">
                        <Image
                            src={src}
                            alt={alt}
                            height={48}
                            width={48}
                            className="transition-transform duration-300 hover:scale-150"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
