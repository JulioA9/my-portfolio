import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <div className="lg:w-3/5 md:w-4/5">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}
