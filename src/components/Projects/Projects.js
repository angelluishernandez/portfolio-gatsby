import React, { useState } from "react"
import ProjectsContainer from "./ProjectsContainer"
import ProjectModal from "./ProjectModal"
import { projects } from "../../constants/projects"

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const onProjectSelect = id => {
    const clickedProject = projects.filter(project => project.id === id)[0]
    setSelectedProject(clickedProject)
    setModalIsOpen(true)
  }

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      <ProjectsContainer
        toggleModal={toggleModal}
        modalIsOpen={modalIsOpen}
        onProjectSelect={onProjectSelect}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <ProjectModal
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        selectedProject={selectedProject}
      />
    </>
  )
}

export default Projects
