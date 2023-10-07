import React from "react";

import { Avatar, Skills } from "../components";
import { QuoteHeading } from "../components/QuoteHeading";
import { Projects } from "../components/Projects";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");
  return (
    <section>
      <QuoteHeading/>
      <Avatar/>
      <Skills/>
      <Projects/>
    </section>
  );
};
