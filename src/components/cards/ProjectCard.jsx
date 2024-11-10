"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ProjectModal from "../modals/ProjectModal";

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
          <ProjectModal
            handleCloseModal={handleCloseModal}
            projectImage={projectImage}
            projectName={projectName}
            projectDesc={projectDesc}
            projectDetails={projectDetails}
            projectTechs={projectTechs}
            projectLink={projectLink}
          />,
          document.body
        )}
    </article>
  );
}

export default ProjectCard;
