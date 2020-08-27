import React from "react"

import ProjectCard from "./ProjectCard"

const ProjectsContainer = ({
  toggleModal,
  modalIsOpen,
  projects,
  onProjectSelect,
}) => {
  return (
    <div className="container-fluid mb-5" id="projects">
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            toggleModal={toggleModal}
            modalIsOpen={modalIsOpen}
            onProjectSelect={onProjectSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsContainer
