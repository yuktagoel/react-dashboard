import React from "react";
import Card from "./Card.tsx";
import ProjectHeading from "./ProjectHeading.tsx";

function ProjectSection() {
  return (
      <article className="project-sections">
        <ProjectHeading />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>

        <div />
      </article>
  );
}

export default ProjectSection;
