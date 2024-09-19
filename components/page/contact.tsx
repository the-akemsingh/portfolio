import Image from "next/image";

export default function Contact() {
    return (
        <div className="bg-[#0A0A0A]">
            <div className="flex gap-6 mt-28 mb-10 justify-center">
                <a
                    href="https://www.github.com/the-akemsingh/"
                    target="_blank"
                    className="transition-transform duration-300 hover:scale-150"
                >
                    <Image src={`/images/github.svg`} alt="github" width={32} height={32} />
                </a>
                <a
                    href="mailto:singhakem03@gmail.com"
                    className="transition-transform duration-300 hover:scale-150"
                >
                    <Image src={`/images/mail.svg`} alt="mail" width={32} height={32} />
                </a>
                <a
                    href="https://www.linkedin.com/in/akemnoor-s-80a743204/"
                    target="_blank"
                    className="transition-transform duration-300 hover:scale-150"
                >
                    <Image src={`/images/linkedin.svg`} alt="linkedin" width={32} height={32} />
                </a>
                <a
                    href="https://x.com/akemnoor_singh"
                    target="_blank"
                    className="transition-transform duration-300 hover:scale-150"
                >
                    <Image src={`/images/x.svg`} alt="X" width={32} height={32} />
                </a>
            </div>
        </div>
    );
}
