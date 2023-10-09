import React from "react";
import { SkillsCard } from "./SkillsCard";
import { logo, softskills } from "../logo";

export const Skills = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="pt-8 my-4">
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
        <div className="flex flex-col justify-center items-center">
          <div className="pt-8 my-4">
            <p className="flex text-center items-center text-5xl font-extrabold dark:text-white">
              Soft Skills
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {softskills.map((softskills) => (
              <div
                key={softskills.id}
                className="w-48 rounded-lg flex flex-col items-center m-4 flex-wrap p-4 dark:bg-slate-100 "
              >
                <img
                  className="w-14 h-14 rounded "
                  src={softskills.image}
                  alt={softskills.name}
                />
                <div className="py-4 text-lg text-center">
                  {softskills.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </div>
  );
};
