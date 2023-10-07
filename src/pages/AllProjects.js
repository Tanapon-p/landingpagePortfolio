import React from "react";
import { Projects } from "../components";
import { useTitle } from "../hooks/useTitle";

export const AllProjects = () => {
  useTitle("AllProjects");
  return (
    <section>
      <main>
        <Projects />
      </main>
    </section>
  );
};
