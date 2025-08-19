"use client"

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Achievements() {
  return (
    <div className="min-h-fit flex mt-10 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div
          className="flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <div className="flex-1">
            <h2
              className="text-3xl md:text-4xl font-extrabold "
            >
              - achievements
            </h2>

            <p
              className={`font-semibold `}
            >
              Milestones I've accomplished along my journey.
            </p>

            <div
              className="space-y-4 flex gap-4 text-gray-700"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className={`text-xl font-bold text-neutral-600 `}
                  >
                    InnoSprint Ideathon <br />
                    Chandigarh Group of Colleges Jhanjeri, S.A.S Nagar
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`text-neutral-500 text-sm max-w-sm mt-2`}
                  >
                    Proposed an innovative solution to help hawkers enhance their business growth. <br /> Ranked in the top 10 among 50 competing teams.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
