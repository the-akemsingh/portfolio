import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] flex justify-center items-center px-4 py-8">
      <div className="flex gap-6">
        <a
          href="https://www.github.com/the-akemsingh/"
          target="_blank"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={`/images/github.svg`} alt="github" width={48} height={48} />
        </a>
        <a
          href="mailto:singhakem03@gmail.com"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={`/images/mail.svg`} alt="mail" width={48} height={48} />
        </a>
        <a
          href="https://www.linkedin.com/in/akemnoor-s-80a743204/"
          target="_blank"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={`/images/linkedin.svg`} alt="linkedin" width={48} height={48} />
        </a>
        <a
          href="https://x.com/akemnoor_singh"
          target="_blank"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={`/images/x.svg`} alt="X" width={48} height={48} />
        </a>
      </div>
    </div>
  );
}