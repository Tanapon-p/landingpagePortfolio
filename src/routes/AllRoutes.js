import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  AllProjects,
  ProjectSinglePage,
  Projects3,
  Projects1,
  Projects2,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/Codebook-Tp" element={<Projects1 />} />
          <Route path="projects/Cinemalover" element={<Projects2 />} />
          <Route path="projects/Goalgrid-Tp" element={<Projects3 />} />
        </Routes>
      </main>
    </div>
  );
};
