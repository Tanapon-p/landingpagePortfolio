import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, AllProjects, ProjectSinglePage } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:id" element={<ProjectSinglePage />} />
        </Routes>
      </main>
    </div>
  );
};
