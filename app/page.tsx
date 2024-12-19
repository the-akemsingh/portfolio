import Achievements from "@/components/page/achievements";
import Intro from "@/components/page/Intro";
import Skills from "@/components/page/skills";
import Footer from "@/components/page/footer";
import Projects from "@/components/page/Projects";

export default function Home() {  
  return (
    <div className="flex flex-col">
      <Intro></Intro>
      <Projects></Projects>
      <Achievements></Achievements>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}
