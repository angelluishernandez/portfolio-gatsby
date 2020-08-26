import React from "react"
import { TechLogo } from "../UI/TechLogo"
import { LogoTextWrapper } from "../UI/LogoTextWrapper"
import "./TechLogos.css"

const DescriptionLogo = ({ img, name }) => {
  return (
    <TechLogo className="col-md-2 m-2 mt-3 mb-3 d-flex flex-column justify-content-center logo-container">
      <img src={img} alt="..." className="tech-logos" />
      <LogoTextWrapper className="text-muted mt-2">{name}</LogoTextWrapper>
    </TechLogo>
  )
}

export default DescriptionLogo
