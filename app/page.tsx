import Achievements from "@/components/page/achievements";
import Intro from "@/components/page/Intro";
import Skills from "@/components/page/skills";
import Projects from "@/components/page/Projects";
import WorkExperience from "@/components/page/workExperience";
import Education from "@/components/page/Education";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <WorkExperience />
      <Projects />
      <Achievements />
      <Skills />
      <Education />
    </div>
  );
}
