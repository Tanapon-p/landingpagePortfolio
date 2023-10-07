import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, Projects } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
