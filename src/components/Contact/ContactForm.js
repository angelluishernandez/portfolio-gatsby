import React from "react"
import { ButtonContainer } from "../UI/ButtonContainer"
import "./ContactForm.css"

const ContactForm = ({
  handleSubmit,
  errors,
  errorMessage,
  emailSent,
  setEmailForm,
  emailForm,
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
            <label htmlFor="name">Your name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={e =>
                setEmailForm({ ...emailForm, name: e.target.value })
              }
            />
            {errors && <h5 className="form-error">{errorMessage.name}</h5>}

            <label htmlFor="email">Your email </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={e =>
                setEmailForm({ ...emailForm, email: e.target.value })
              }
            />
            {errors && <h5 className="form-error">{errorMessage.email}</h5>}

            <label htmlFor="subject">Your subject </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              onChange={e =>
                setEmailForm({ ...emailForm, subject: e.target.value })
              }
            />
            {errors && <h5 className="form-error">{errorMessage.subject}</h5>}

            <label htmlFor="message">Your message </label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              onChange={e =>
                setEmailForm({ ...emailForm, message: e.target.value })
              }
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
