import React from "react";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <div>
      <div className="py-4 my-4 flex items-center justify-center">
        <p className=" text-5xl font-extrabold dark:text-white">Projects</p>
      </div>
      <ProjectsCard />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </div>
  );
};
