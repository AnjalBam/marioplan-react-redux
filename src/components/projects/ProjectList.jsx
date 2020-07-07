import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  return (
    <div className="project-div section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
