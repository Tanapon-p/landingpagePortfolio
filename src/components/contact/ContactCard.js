import React from "react";

export const ContactCard = ({ contacts }) => {
  const { title, description, img, link } = contacts;
  return (
    <>
      <div className="flex w-full m-4 justify-center duration-150 hover:scale-110">
        <a
          href={link}
          class="flex flex-col w-full items-center justify-between max-w-sm h-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          target="_blank"
          rel="noreferrer"
        >
          <h5 class="mb-2 text-xl sm:text-2xl tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <img src={img} alt={title} />
          <p class="font-normal text-base sm:text-lg text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </a>
      </div>
    </>
  );
};
