export default function Achievements() {
    return (
      <div className="bg-[#0A0A0A] flex flex-col pt-16 pb-16 text-white px-8 sm:px-16">
        <div className="text-3xl sm:text-4xl pl-0">ACHIEVEMENTS</div>
        <div className="pl-0 mt-4 text-lg sm:text-xl">Milestones I've accomplished.</div>
        <div className="pl-0 mt-8">
          <div className="text-2xl font-bold sm:text-3xl">InnoSprint Ideathon</div>
          <div className="mt-2 text-base sm:text-lg">Chandigarh Group of Colleges Jhanjeri, S.A.S Nagar</div>
          <ul className="list-disc list-inside mt-2 text-base sm:text-lg">
            <li>Proposed an innovative solution to help hawkers enhance their business growth</li>
            <li>Ranked in the top 10 among 50 competing teams</li>
          </ul>
        </div>
      </div>
    );
  }