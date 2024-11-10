import Image from "next/image";
import React from "react";
import Star from "@/assets/images/star.png";
import ProjectCard from "../cards/ProjectCard";
import Zodiac from "@/assets/images/works/zodiac.webp";
import Eko from "@/assets/images/works/eko.webp";
import Proformance from "@/assets/images/works/proformance.webp";
import Resellcle from "@/assets/images/works/resellcle.webp";
import Jobsolv from "@/assets/images/works/jobsolv.webp";
import { Trail } from "../animations/Trial";
function WorksSection() {
  return (
    <section id="works" className="px-8 py-20 space-y-8">
      <h2 className="flex gap-2 items-center uppercase text-2xl">
        <div className="w-10 h-10">
          <Image width={40} height={40} src={Star} alt="start" />
        </div>
        Selected Cases
      </h2>

      <div className="space-y-20">
        <Trail className="space-y-20">
          <ProjectCard
            projectName={"Jobsolv"}
            projectDesc={"job hunting web application"}
            projectLink={"https://www.jobsolv.com/"}
            projectTechs={[
              { id: 1, name: "React JS" },
              { id: 2, name: "Typescript" },
              { id: 3, name: "Taiwlind CSS" },
              { id: 4, name: "Shadcn UI" },
            ]}
            projectDetails={
              "A job hunting web application featuring a personalized AI-powered job board. Allows users to tailor resumes for each position and apply to multiple jobs efficiently with just a few clicks."
            }
            projectImage={Jobsolv}
          />
          <ProjectCard
            classNames="flex-row-reverse lg:ms-40"
            projectName={"Proformance"}
            projectDesc={"Informative website"}
            projectLink={"https://proformance.vercel.app/"}
            projectTechs={[
              { id: 1, name: "Next JS" },
              { id: 2, name: "Tailwind CSS" },
              { id: 3, name: "Aceternity UI" },
            ]}
            projectDetails={
              "Developed “Proformance” with Next JS, a project focused on enhancing UI design skills. with a strong focus on beautiful UI design and animations, utilizing Three JS and Aceternity UI to create an engaging and visually appealing experience."
            }
            projectImage={Proformance}
          />
          <ProjectCard
            classNames="flex-row-reverse lg:ms-[20vw]"
            projectName={"Resellcle"}
            projectDesc={"E-commerce"}
            projectLink={"https://resellcle.com/"}
            projectTechs={[
              { id: 1, name: "Next JS" },
              { id: 2, name: "Typescript JS" },
              { id: 3, name: "Tailwind CSS" },
              { id: 4, name: "Material UI" },
            ]}
            projectDetails={
              "Developed an e-commerce marketplace using Next.js, enabling users to buy and sell items with integrated chat functionality for seamless communication between sellers and buyers."
            }
            projectImage={Resellcle}
          />
          <ProjectCard
            classNames="lg:ms-24"
            projectName={"Zodiac"}
            projectDesc={"E-commerce"}
            projectLink={"https://zodiac-eg.co/"}
            projectTechs={[
              { id: 1, name: "Next JS" },
              { id: 2, name: "Tailwind CSS" },
              { id: 3, name: "Material UI" },
            ]}
            projectDetails={
              "Developed an e-commerce platform for a clothing brand using Next.js, focusing on a user-friendly design to enhance the shopping experience."
            }
            projectImage={Zodiac}
          />
          <ProjectCard
            classNames="lg:ms-12"
            projectName={"Eko"}
            projectDesc={"informative website"}
            projectLink={"https://ziaddalii.github.io/eko/"}
            projectTechs={[
              { id: 1, name: "React JS" },
              { id: 2, name: "Three JS" },
              { id: 3, name: "Material UI" },
            ]}
            projectDetails={
              "Developed “Eko”, a project focused on enhancing UI design skills. It features a glass-morphism style, immersive 3D models, and effects using Three.js. The website incorporates subtle animations to create an engaging user experience."
            }
            projectImage={Eko}
          />
        </Trail>
      </div>
    </section>
  );
}

export default WorksSection;
