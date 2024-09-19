import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function ProjectTimeline() {
  const data = [
    {
      title: "Above Medium",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal  gap-3  mb-8">
            <p className="">
           ✅ User has the functionality to post and view blogs posted by other users </p>
            <a
              href="https://medium-git-main-akemnoor-singhs-projects.vercel.app/"
              target="_blank"
              className="inline-flex items-center mt-6 gap-1 mr-3 text-blue-500 hover:underline"
            ><Image src={`/images/icons8-link-50.png`} width={20} height={20} alt="link" ></Image>
              LINK
            </a>
            <a
              href="https://github.com/the-akemsingh/AboveMedium"
              target="_blank"
              className="inline-flex items-center gap-1 text-blue-500 dark:text-gray-300 hover:underline"
            ><Image src={`/images/icons8-github-30.png`} width={20} height={20} alt="GIthub" ></Image>
              GITHUB
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`/images/Welcome.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/SignUp.jpg`} alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/Signin.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/Home.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "PayMoney",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="">
           ✅  Implemented the architecture of how payment apps works.
            </p>
            <p className="">
           ✅  Developed a seperate bank webhook server that does the function of updating balances of users.
            </p>
            <p className="">
             ✅The user done a transactoin, the webhook server is hit by bank that payment is received then the balances are updated.
            </p>
            <p className="">
              *we need to hit webhook server manually (using Postman or any other tool)
            </p>
            <a
              href="https://github.com/the-akemsingh/PayMoney"
              target="_blank"
              className="inline-flex items-center gap-1 text-blue-500 dark:text-gray-300 hover:underline"
            >
            <Image className="mt-6" src={`/images/icons8-github-30.png`} width={20} height={20} alt="link" ></Image>
              <p className="mt-6">GITHUB</p>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`/images/Welcome12.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/signup12.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/transactions.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/p2p.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={`/images/addmoney.jpg`}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "BachEats",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            People can connect with others over a meal
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Currently building this..
            </div>
            <a
              href="https://github.com/the-akemsingh/Bach_Eats"
              target="_blank"
              className="inline-flex items-center gap-1 text-blue-500 dark:text-gray-300 hover:underline"
            >
            <Image className="mt-6" src={`/images/icons8-github-30.png`} width={20} height={20} alt="link" ></Image>
              <p className="mt-6">GITHUB</p>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`/images/WPBAR.jpg`}
              alt=""
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
