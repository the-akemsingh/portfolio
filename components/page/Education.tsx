'use client'

interface Education {
    title: string
    institution: string
    period: string
    location: string
    details?: string
}

const education: Education[] = [
    {
        title: "Bachelors",
        institution: "CGC University",
        period: "August 2021 - May 2025",
        location: "Punjab",
        details: "Bachelor of Technology in Electronics & Communication Engineering",
    }
]

const Education = () => {
    return (
        <div className=" flex mb-10 justify-center ">
            <div className="w-full max-w-3xl">
                <h2
                    className={`text-3xl md:text-4xl font-extrabold`}
                >
                    - education
                </h2>
                <div
                    className="mt-4 space-y-8"
                >
                    {education.map((education, index) => (
                        <div
                            key={index}
                            className="p-3"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className={`text-xl font-bold text-neutral-600 `}>{education.title}</h3>
                                    <p className={`text-neutral-500 `}>{education.institution}</p>
                                </div>
                                <span>
                                    {education.period}
                                </span>
                            </div>
                            <ul className="space-y-2 text-neutral-600">
                                {education.details && (
                                    <li className={`flex items-start `}>
                                        <span className="mr-2">-</span>
                                        <span>{education.details}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
