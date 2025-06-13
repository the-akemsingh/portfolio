import Achievements from "@/components/page/achievements";
import Intro from "@/components/page/Intro";
import Skills from "@/components/page/skills";
import Footer from "@/components/page/footer";
import Projects from "@/components/page/Projects";
import WorkExperience from "@/components/page/workExperience";

export default function Home() {  
  return (
    <div className="flex flex-col">
      <Intro></Intro>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
      <Achievements></Achievements>
      {/* <Footer></Footer> */}
    </div>
  );
}
