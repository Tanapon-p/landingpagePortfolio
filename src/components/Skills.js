import React from "react";
import { SkillsCard } from "./SkillsCard";
import { logo } from "../logo";

export const Skills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 my-4">
          <p className="flex items-center text-5xl font-extrabold dark:text-white">
            Skills
          </p>
        </div>
        <div className=" flex flex-wrap justify-center">
          {logo.map((logo) => (
            <SkillsCard key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </div>
  );
};
