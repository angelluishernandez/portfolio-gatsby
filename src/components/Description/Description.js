import React from "react"
import DescriptionLogo from "./DescriptionLogo"
import { techLogos } from "../../constants/techLogos"
import { Horizontal } from "../UI/Horizontal"
import "./Description.css"

const Description = () => {
  return (
    <section className="description">
      <div className="container stack-container">
        <div className="row justify-content-center">
          <div className="col-12 mt-5">
            <h3>Here's my stack</h3>
            <p>
              I am a web developer who is always looking for opportunities,
              challenges to overcome and new technologies to learn.{" "}
            </p>
            <p>
              <b>
                So far these are the technologies I am having the most fun with
              </b>
            </p>
          </div>
          <div className="row justify-content-center">
            {techLogos.map((logo, index) => (
              <DescriptionLogo img={logo.img} name={logo.name} key={index} />
            ))}
          </div>
          <Horizontal />
        </div>
      </div>
    </section>
  )
}

export default Description
