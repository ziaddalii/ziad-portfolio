import React from "react";
import dynamic from "next/dynamic";

// const Model = dynamic(() => import("./../About/Model"), {
//   ssr: false, // This disables server-side rendering for the 3D model component
// });
import Summary from "./../About/Summary";
import Model from "../About/Model";

function AboutSection() {
  return (
    <section id="about" className="grid gap-8 md:grid-cols-2 grid-cols-1 px-8 pt-20 items-center">
      <Summary />
      <div className="sm:h-[30rem] md:h-full h-[20rem] after:w-full after:h-full after:absolute relative after:opacity-0 after:top-0">
        <Model />
      </div>
    </section>
  );
}

export default AboutSection;
