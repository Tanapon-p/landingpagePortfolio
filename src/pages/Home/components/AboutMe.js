import React from "react";
import profile from "../../../assets/profile.png";

export const AboutMe = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-center">
        <div
          id="about"
          className="flex flex-col justify-center items-center md:flex-row "
        >
          <div>
            <img
              className="max-w-sm m-4 rounded-full shadow h-96"
              src={profile}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-start items-start mx-4">
            <p className="my-4 font-semibold text-2xl tracking-normal md:text-3xl lg:text-5xl text-gray-900 dark:text-white">
              More about me
            </p>
            <p className="mb-6 text-base sm:text-lg text-gray-500 dark:text-gray-400">
              A passionate and dedicated{" "}
              <span className="font-bold">junior front-end developer</span> with
              a strong foundation in web development technologies. I'm excited
              to bring my skills and enthusiasm for creating interactive and
              user-friendly web applications to your team. I am committed to
              learning and growing as a developer and{" "}
              <span className="font-bold">
                am excited about the opportunity to contribute to meaningful
                projects.
              </span>{" "}
              I look forward to discussing how I can contribute to your
              organization's success as a junior front-end developer.
            </p>
          </div>
        </div>
      </div>

      {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" /> */}
    </section>
  );
};
