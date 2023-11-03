import React from "react";

export const QuoteHeading = () => {
  const PDF_FILE_URL =
    "https://tanapon-portfolio.netlify.app/Tanapon-Frontend Developer-Resume.pdf";
  function downloadFilePDF(url) {
    fetch(url)
      .then((response) => response.blob)
      .then((blob) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  }
  return (
    <div className="mx-5 bg">
      <div className="flex flex-col justify-center py-10 mt-8 text-start ">
        <div className="flex flex-col items-start ">
          <div>
            <p className=" text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
              Tanapon poonsanchai
            </p>
            <p className=" text-base font-normal text-gray-500  dark:text-gray-400">
              Front-end Developer
            </p>
            <h1 className=" my-6 text-2xl tracking-normal md:text-3xl lg:text-5xl text-gray-900 dark:text-white">
              Hi! I'm a front-end developer eager to contribute my skills and
              passion for building user-friendly web applications to your team.
            </h1>
          </div>
          <p className=" text-lg lg:text-xl font-normal text-gray-500  dark:text-gray-400">
            A Junior Front-End Dev's Portfolio
          </p>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <button
          onClick={() => downloadFilePDF(PDF_FILE_URL)}
          type="button"
          className="flex items-center h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download Resume
          <span>
            <svg
              class="w-6 h-6 ml-4  text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 19"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
    </div>
  );
};
