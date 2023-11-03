import React from "react";
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
          }}
          className="text-center flex justify-center items-center rounded-full text-white dark:text-gray-700 font-extrabold bg-gray-700 dark:bg-white shadow duration-150 hover:scale-110"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};
