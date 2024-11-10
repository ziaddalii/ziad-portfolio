import React from "react";
import ExperienceBackground from "../Experience/ExperienceBackground";
import AboutSection from "./AboutSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Marquee from "react-fast-marquee";
import { Trail } from "../animations/Trial";
const myExp = [
  {
    id: 3,
    coName: "Yorbitec",
    office: "Remote",
    location: "Bengaluru, Karnataka, India ",
    time: "Jul 2024 - Present",
    details: [
      "Updated and refactored code to improve structure and efficiency and optimize performance.",
      "Collaborated with the backend developer to optimize APIs, resulting in improved performance and faster response times.",
      "Contributed to XAMI, an AI-driven solution with OpenAI integration, optimizing CRM systems, API performance, and automating workflows to boost customer engagement and efficiency.",
    ],
  },
  {
    id: 2,
    coName: "NextGen Softwares",
    office: "Remote",
    location: "Alexandria, Egypt",
    time: "Feb 2024 - Jul 2024",
    details: [
      "Developed and maintained web applications using Next.js, React.js, and TypeScript.",
      "Utilized Material-UI, Shadcn, and Tailwind CSS to design and implement responsive and aesthetically pleasing user interfaces.",
      "Integrated data fetching and state management solutions using React Query and Axios, optimizing application performance and data handling.",
      "Utilized Jira for task tracking and Slack for team communication, ensuring clear and efficient collaboration within the company.",
    ],
  },
  {
    id: 1,
    coName: "Icon Technology Solutions",
    office: "On-site",
    location: "Mansoura, Egypt",
    time: "May 2023 - Feb 2024",
    details: [
      "Developed and maintained a variety of bilingual web applications, including e-commerce sites, informational websites, and admin dashboards using Next JS, React JS and Typescript.",
      "Implemented state management solutions using Redux and Zustand.",
      "Styled applications using Tailwind CSS and Material-UI, creating responsive and visually appealing user interfaces.",
      "Designed and validated forms with React Hook Form and Zod, ensuring robust data handling and user input validation.",
      "Utilized Asana for task management and collaboration within the team.",
    ],
  },
];

const techs = [
  {
    id: 1,
    name: "React JS",
  },
  {
    id: 2,
    name: "Next JS",
  },
  {
    id: 3,
    name: "Tailwind CSS",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "Typescript",
  },
  {
    id: 6,
    name: "Bootstrap",
  },
  {
    id: 7,
    name: "Material UI",
  },
  {
    id: 8,
    name: "Shadcn UI",
  },
  {
    id: 9,
    name: "Redux",
  },
  {
    id: 10,
    name: "Zustand",
  },
  {
    id: 11,
    name: "Axios",
  },
  {
    id: 12,
    name: "React Query",
  },
  {
    id: 13,
    name: "Zod",
  },
  {
    id: 14,
    name: "Three JS",
  },
  {
    id: 15,
    name: "HTML",
  },
  {
    id: 16,
    name: "CSS",
  },
];
export default function ExperienceSection() {
  return (
    <>
      <section className="grid md:grid-cols-5 grid-cols-1 gap-8 px-8 py-40 mt-20 h-screen">
        <article className="md:col-span-2 px-8 z-10">
          <h2 className="lg:text-9xl sm:text-7xl text-5xl text-secondary font-mono">
            I AM HONORED TO WORK WITH
          </h2>
        </article>
        <article className="md:col-span-3 z-10">
          <div className="flex gap-4 items-center uppercase font-bold md:text-xl sm:text-lg text-sm">
            <h2 className="sm:w-1/4 w-1/3">Company</h2>
            <h2 className="sm:w-1/4 w-1/3">Office</h2>
            <h2 className="sm:w-1/4 w-1/3 sm:block hidden">Location</h2>
            <h2 className="sm:w-1/4 w-1/3">Time</h2>
          </div>
          <Accordion type="single" collapsible>
            <Trail>
              {myExp.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="flex gap-4 items-center text-start md:text-base sm:text-sm text-xs">
                    {" "}
                    <h2 className="sm:w-1/4 w-1/3 uppercase">{item.coName}</h2>
                    <p className="sm:w-1/4 w-1/3 uppercase">{item.office}</p>
                    <p className="sm:w-1/4 w-1/3 uppercase sm:block hidden">
                      {item.location}
                    </p>
                    <p className="sm:w-1/4 w-1/3 uppercase">{item.time}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-inside">
                      {item.details.map((detail, i) => (
                        <li className="list-disc" key={i}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Trail>
          </Accordion>
        </article>
      </section>
      <Marquee
        style={{ overflow: "hidden" }}
        autoFill
        speed={100}
        pauseOnHover
        className="font-mono md:text-8xl text-4xl uppercase text-secondary"
      >
        {techs.map((tech) => (
          <h2 key={tech.id} className="mr-8">
            {tech.name}
          </h2>
        ))}
      </Marquee>
    </>
  );
}
