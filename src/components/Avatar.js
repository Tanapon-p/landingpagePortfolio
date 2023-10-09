import React from "react";
import profile from "../assets/2777.png";

export const Avatar = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8 md:flex-row ">
        <div>
          <img className="max-w-sm p-4" src={profile} alt="" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-7xl my-4 font-bold dark:text-white">
            Hi! I'm Tanapon
          </p>
          <p className="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">
            A passionate and dedicated{" "}
            <span className="font-bold">junior front-end developer</span> with a
            strong foundation in web development technologies. I'm excited to
            bring my skills and enthusiasm for creating interactive and
            user-friendly web applications to your team. I am committed to
            learning and growing as a developer and {" "}
            <span className="font-bold">
              am excited about the opportunity to contribute to meaningful
              projects.
            </span>{" "}
            I look forward to discussing how I can contribute to your
            organization's success as a junior front-end developer.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </>
  );
};
