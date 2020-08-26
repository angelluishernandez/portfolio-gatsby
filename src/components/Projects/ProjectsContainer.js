import React from "react"
import { projects } from "../../constants/projects"
import ProjectCard from "./ProjectCard"

const ProjectsContainer = ({ toggleModal, modalIsOpen }) => {
  return (
    <div className="container-fluid" id="projects">
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            toggleModal={toggleModal}
            modalIsOpen={modalIsOpen}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsContainer
