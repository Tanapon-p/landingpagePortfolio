import React from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { projectDetails } from "../logo";
import ProjectDetails from "../components/ProjectsDetails";

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

  const { title, image, details, details2, details3 } = project;

  console.log(image);

  return (
    <main>
      <section>
        <h1 className="mb-7 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <div>
          <img className="my-7" src={image} alt={title} />
        </div>
        <div className="my-16">
          <h2 className="my-4 font-bold text-4xl md:text-5xl">
            What is "{title}" ?
          </h2>
          <div className="text-xl md:text-2xl">
            <ProjectDetails htmlContent={details2} />
          </div>
        </div>
        <div>
          <div className="my-16">
            <h2 className="my-4 font-bold text-4xl md:text-5xl">
              Why I need to create this wep-app?
            </h2>
            <div className="text-xl md:text-2xl">
              <ProjectDetails htmlContent={details} />
            </div>
          </div>
        </div>
        <div>
          <div className="my-16">
            <h2 className="my-4 font-bold text-4xl md:text-5xl">Conclusion</h2>
            <div className="text-xl md:text-2xl">
              <ProjectDetails htmlContent={details3} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
