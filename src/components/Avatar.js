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
          <p className="text-7xl my-4 font-bold dark:text-white">Tanapon</p>
          <p className="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem dicta distinctio ut sapiente quisquam dolores culpa
            amet iste magnam earum doloribus accusamus voluptatem ducimus
            cupiditate totam, expedita sit laboriosam quibusdam.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </>
  );
};
