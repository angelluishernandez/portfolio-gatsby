import React from "react"
import { ButtonContainer } from "../UI/ButtonContainer"
import "./ContactForm.css"

const ContactForm = ({
  handleSubmit,
  errors,
  errorMessage,
  emailSent,
  handleChange,
}) => {
  return (
    <div className="container contact">
      {emailSent ? <h1>Your email has been sent</h1> : null}
      <div className="row d-flex">
        <div className="col-12 justify-content-center ">
          <h3>Do you want to get in touch?</h3>
          <h5>Please leave message</h5>
          <h5>I will get back to you as soon as possible</h5>
          <form
            className="form-group"
            onSubmit={handleSubmit}
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* The following input is necessary for netlify to work */}

            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Your name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
            {errors && <h5 className="form-error">{errorMessage.name}</h5>}

            <label htmlFor="email">Your email </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
            {errors && <h5 className="form-error">{errorMessage.email}</h5>}

            <label htmlFor="subject">Your subject </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              onChange={handleChange}
            />
            {errors && <h5 className="form-error">{errorMessage.subject}</h5>}

            <label htmlFor="message">Your message </label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              onChange={handleChange}
            />
            {errors && <h5 className="form-error">{errorMessage.message}</h5>}

            <ButtonContainer type="submit" className="mt-2">
              Send
            </ButtonContainer>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
