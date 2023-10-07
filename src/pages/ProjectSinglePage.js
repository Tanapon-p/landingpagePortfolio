import React from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { projectDetails } from "../logo";

export const ProjectSinglePage = () => {
  const params = useParams();
  console.log(params);
  useTitle(`project ${params.id}`);

  const project = projectDetails.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return <div>Blog post not found</div>;
  }

  const { title, image, details } = project;

  console.log(image);

  return (
    <main>
      <section>
        <div>
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <p>{details}</p>
      </section>
    </main>
  );
};
