import Achievements from "@/components/page/achievements";
import Contact from "@/components/page/contact";
import Intro from "@/components/page/Intro";
import ProjectTimeline from "@/components/page/Projects";
import Skills from "@/components/page/skills";
import Footer from "@/components/page/footer";

export default function Home() {  
  return (
    <div className="flex flex-col">
      <Intro></Intro>
      <Contact></Contact>
      <ProjectTimeline></ProjectTimeline>
      <Achievements></Achievements>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}
