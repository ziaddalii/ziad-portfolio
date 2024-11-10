import ExperienceBackground from "@/components/Experience/ExperienceBackground";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import LetsConnectSection from "@/components/sections/LetsConnectSection";
import WorksSection from "@/components/sections/WorksSection";
export const metadata = {
  title: "Ziad Ali",
  description:
    "Experienced frontend developer specializing in creating dynamic, user-centered web experiences. Passionate about React, digital solutions, and elevating customer engagement through optimized UI and seamless performance.",
  openGraph: {
    title: "Ziad Ali",
    images: "../assets/images/cover-share.png",
    description:
      "Experienced frontend developer specializing in creating dynamic, user-centered web experiences. Passionate about React, digital solutions, and elevating customer engagement through optimized UI and seamless performance.",
  },
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
