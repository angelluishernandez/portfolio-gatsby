import React, { useState } from "react"
import ProjectsContainer from "./ProjectsContainer"

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  return (
    <ProjectsContainer toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
  )
}

export default Projects
