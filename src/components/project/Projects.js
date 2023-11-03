import React from "react";
import { ProjectsCard } from "./ProjectsCard";
import { projectPic } from "../../data";

export const Projects = () => {
  return (
    <section id="projects" className="my-8 mt-24">
      <div>
        <div className="py-4 flex items-center justify-center">
          <h2 className="tracking-normal font-semibold text-3xl lg:text-5xl text-gray-900 dark:text-white">
            Personal Projects
          </h2>
        </div>
        <div className="flex flex-col ">
          {projectPic.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
      </div>
    </section>
  );
};
