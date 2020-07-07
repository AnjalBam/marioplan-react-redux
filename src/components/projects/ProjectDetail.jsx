import React from "react";

const ProjectDetail = props => {
  console.log(props);
  const { id } = props.match.params;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            vel reiciendis velit doloremque provident voluptatem nesciunt, ut
            facilis odio saepe doloribus dolore asperiores sequi fugiat modi
            nostrum ea, ullam accusantium!
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By anjal Bam</div>
            <div>8th Jul 2 am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
