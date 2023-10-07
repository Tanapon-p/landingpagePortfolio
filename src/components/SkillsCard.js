import React from "react";

export const SkillsCard = ({ logo }) => {
  const { name, image } = logo;
  return (
    <div className="w-36 rounded-lg flex flex-col justify-center items-center m-4 flex-wrap p-4 dark:bg-slate-100">
      <img className="w-20 h-20 rounded " src={image} alt={name} />
      <div className="py-4 dark:text-gray-400">{logo.name}</div>
    </div>
  );
};
