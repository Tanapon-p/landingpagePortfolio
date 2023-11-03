import React from "react";

import { AboutMe } from "./components/AboutMe";
import { QuoteHeading } from "./components/QuoteHeading";
import { useTitle } from "../../hooks/useTitle";
import { Skills, Projects } from "../../components";
import { Contact } from "../Contact";
import { BackToTopButton } from "../../components/button/BackToTopButton";

export const Home = () => {
  useTitle("Home");
  return (
    <section>
      <QuoteHeading />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <BackToTopButton />
    </section>
  );
};
