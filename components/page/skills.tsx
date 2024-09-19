import Image from "next/image";


export default function Skills() {
    return (
        <div className="bg-[#0A0A0A]  flex flex-col pt-48 pb-48 text-white">
            <div className="text-4xl pl-44">SKILLS</div>
            <div className="pl-44 mt-4 text-lg">A list of my technical proficiencies.</div>
            <div className="pl-44 flex justify-center gap-4 mt-20">
                <Image src={`/images/cpp.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/js.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/ts.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/postgres.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/mongodb.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/prisma.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/node.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/express.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/react.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/next.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/tailwind.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/git.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/github.svg`} alt="c++" height={48} width={48}></Image>
                <Image src={`/images/postman.svg`} alt="c++" height={48} width={48}></Image>
            </div>
        </div>
    );
}
