"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MarqueeButton from "../buttons/MarqueeButton";

function ProjectCard({
  projectImage,
  projectName,
  projectDesc,
  projectDetails,
  projectTechs,
  projectLink,
  classNames,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setTimeout(() => setOpenModal(false), 0);
    console.log("Modal should close, openModal:", openModal);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <article
      onClick={handleOpenModal}
      className={`flex md:flex-row flex-col items-center w-fit group md:gap-12 gap-0 ${classNames}`}
    >
      <div className="md:max-w-[30rem] w-full object-contain overflow-hidden group-hover:grayscale-0 group-hover:sepia-0 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100 grayscale-[100%] sepia-[100%] saturate-50 contrast-[60%] brightness-[80%] transition-all duration-500 ease-in-out">
        <Image
          src={projectImage}
          alt={`${projectName} project image`}
          className="w-full group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="leading-none text-center md:text-start">
        <h2 className="md:text-[9rem] text-[5rem] uppercase font-mono text-secondary">
          {projectName}
        </h2>
        <span className="uppercase">{projectDesc}</span>
      </div>
      {openModal &&
        ReactDOM.createPortal(
          <div className={`w-screen h-screen top-0 left-0 backdrop-blur-lg overflow-hidden fixed z-[500] bg-black bg-opacity-50 p-20`}>
            <button
              className="absolute top-8 left-8 cursor-pointer"
              onClick={handleCloseModal}
            >
              close
            </button>
            <article className="grid md:grid-cols-2 grid-cols-1 h-full justify-center items-center w-fit md:gap-12 gap-8">
              <div className="leading-none col-span-1 space-y-4">
                <h2 className="text-[9rem] uppercase font-mono text-secondary">
                  {projectName}
                </h2>
                <span className="uppercase text-sm">{projectDesc}</span>
                <p>{projectDetails}</p>
                <ul className="list-disc flex items-center justify-between text-sm uppercase">
                  {projectTechs.map((tech) => (
                    <li key={tech.id}>{tech.name}</li>
                  ))}
                </ul>
                <MarqueeButton href={projectLink} target="_blank">Showcase</MarqueeButton>
              </div>
              <div className="col-span-1 object-contain overflow-hidden">
                <Image
                  src={projectImage}
                  alt={`${projectName} project image`}
                  className="w-full duration-500 ease-in-out"
                />
              </div>
            </article>
          </div>,
          document.body
        )}
    </article>
  );
}

export default ProjectCard;
