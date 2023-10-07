import React from "react";

import { Avatar, Skills } from "../components";
import { QuoteHeading } from "../components/QuoteHeading";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <section>
      <QuoteHeading/>
      <Avatar/>
      <Skills/>
      <Projects/>
    </section>
  );
};
