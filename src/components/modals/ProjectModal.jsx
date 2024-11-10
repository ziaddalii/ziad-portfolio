import React from "react";
import MarqueeButton from "../buttons/MarqueeButton";
import Image from "next/image";

function ProjectModal({
  handleCloseModal,
  projectImage,
  projectName,
  projectDesc,
  projectDetails,
  projectTechs,
  projectLink,
}) {
  return (
    <div
      className={`w-screen flex items-center min-h-screen top-0 left-0 backdrop-blur-lg overflow-hidden fixed z-[500] bg-black bg-opacity-50 px-12 pt-20 md:p-20`}
    >
      <button
        className="absolute top-8 left-8 cursor-pointer"
        onClick={handleCloseModal}
      >
        close
      </button>
      <article className="flex md:flex-row flex-col-reverse h-full justify-center items-center w-fit md:gap-12 gap-8">
        <div className="md:w-1/2 leading-none col-span-1 space-y-4">
          <h2 className="md:text-[9rem] text-[5rem] uppercase font-mono text-secondary">
            {projectName}
          </h2>
          <span className="uppercase text-sm">{projectDesc}</span>
          <p>{projectDetails}</p>
          <ul className="list-disc flex flex-wrap gap-8 items-center justify-between text-sm uppercase">
            {projectTechs.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
          <MarqueeButton href={projectLink} target="_blank">
            Showcase
          </MarqueeButton>
        </div>
        <div className="md:w-1/2 col-span-1 object-contain overflow-hidden">
          <Image
            src={projectImage}
            alt={`${projectName} project image`}
            className="w-full duration-500 ease-in-out"
          />
        </div>
      </article>
    </div>
  );
}

export default ProjectModal;
