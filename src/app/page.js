import ExperienceBackground from "@/components/Experience/ExperienceBackground";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import LetsConnectSection from "@/components/sections/LetsConnectSection";
import WorksSection from "@/components/sections/WorksSection";

export const metadata = {
  title: "Ziad Ali",
  description: "Ziad Ali Frontend developer portfolio",
};

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ExperienceBackground>
          <ExperienceSection />
          <LetsConnectSection />
        </ExperienceBackground>
      </div>
    </>
  );
}
