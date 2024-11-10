import React from "react";
import Footer from "./Footer";
import MarqueeButton from "../buttons/MarqueeButton";
import { Trail } from "../animations/Trial";

const skills = [
  {
    id: 1,
    name: "Typescript",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "Next JS",
  },
  {
    id: 4,
    name: "React JS",
  },
  {
    id: 5,
    name: "Frontend Development",
  },
  {
    id: 6,
    name: "React Query",
  },
  {
    id: 7,
    name: "Tailwind Css",
  },
];
function LetsConnectSection() {
  return (
    <section
      id="contact"
      className="mt-20 px-8 grid lg:grid-cols-6 gap-4 grid-cols-1 relative overflow-hidden z-10"
    >
      <article className="lg:col-span-2 col-span-1 uppercase lg:text-[18vw] sm:text-[14rem] font-bold leading-none text-9xl font-mono text-secondary">
        <Trail>
          <h2>Let&apos;s</h2>
          <h2>Connect</h2>
        </Trail>
      </article>
      <div className="lg:col-span-4 col-span-1 flex flex-col justify-between">
        <article className="space-y-2">
          <h2 className="uppercase md:text-3xl sm:text-2xl text-sm">
            I&apos;m always interested about
          </h2>
          <div className="flex lg:gap-4 gap-2 flex-wrap max-w-[750px]">
            <Trail overflowHidden={false}>
              <MarqueeButton classNames="lg:-ml-8">Javascript</MarqueeButton>
              <MarqueeButton>Typescript</MarqueeButton>
              <MarqueeButton>React js</MarqueeButton>
              <MarqueeButton>Next js</MarqueeButton>
              <MarqueeButton>Tailwind CSS</MarqueeButton>
              <MarqueeButton>Material UI</MarqueeButton>
              <MarqueeButton classNames="lg:-ml-8">Bootstrap</MarqueeButton>
              <MarqueeButton>Shadcn UI</MarqueeButton>
              <MarqueeButton>Redux</MarqueeButton>
              <MarqueeButton>Zustand</MarqueeButton>
              <MarqueeButton>HTML</MarqueeButton>
              <MarqueeButton>CSS</MarqueeButton>
              <MarqueeButton>Axios</MarqueeButton>
            </Trail>
          </div>
        </article>

        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default LetsConnectSection;
