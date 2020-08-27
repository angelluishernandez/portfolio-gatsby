import React from "react"
import { TechChip } from "../UI/TechChip"
import { CardContainer } from "../UI/CardContainer"
import { ButtonContainer } from "../UI/ButtonContainer"
import { ModalContainer } from "../UI/ModalContainer"

const ProjectModal = ({ modalIsOpen, toggleModal, selectedProject }) => {
  console.log(selectedProject, modalIsOpen)

  return (
    <>
      {!modalIsOpen ? null : (
        <ModalContainer onClick={toggleModal}>
          <CardContainer className="col-12 col-lg-8 mx-auto m-2">
            <div className="project-card mx-auto justify-content-center">
              <div className="w-100 h-100 justify-content-center">
                <img
                  src={selectedProject.img}
                  alt="..."
                  className=" my-auto project-img"
                />
              </div>

              <div className="">
                <div className="card-body text-left">
                  <h5 className="card-title">{selectedProject.title}</h5>
                  <p className="card-text ">{selectedProject.description}</p>
                  <div className="row m-0 pt-0 techs-container">
                    {selectedProject.techs.map((tech, index) => (
                      <TechChip key={index}>{tech}</TechChip>
                    ))}
                  </div>
                </div>
              </div>
              <ButtonContainer>
                <a href={selectedProject.github} target="blank">
                  Check code
                </a>
              </ButtonContainer>
              <span> </span>
              <ButtonContainer>
                <a href={selectedProject.link} target="blank">
                  Check online
                </a>
              </ButtonContainer>
            </div>
          </CardContainer>
        </ModalContainer>
      )}
    </>
  )
}

export default ProjectModal
