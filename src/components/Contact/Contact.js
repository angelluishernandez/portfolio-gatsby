import React, { useState } from "react"
import ContactForm from "./ContactForm"

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})
  const [emailSent, setEmailSent] = useState(false)

  const resetForm = () => {
    setEmailForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleValidation = ({ name, email, subject, message }) => {
    if (name === "") {
      setErrors(true)
      setErrorMessage({ name: "You must provide a name, please" })
    } else if (
      email === undefined ||
      EMAIL_PATTERN.test(String(email).toLocaleLowerCase())
    ) {
      setErrors(true)
      setErrorMessage({ email: "You must provide a valid email, please" })
    } else if (subject === undefined) {
      setErrors(true)
      setErrorMessage({ subject: "You must provide a subject, please" })
    } else if (message === undefined) {
      setErrors(true)
      setErrorMessage({ message: "You must provide a subject, please" })
    } else {
      setErrors(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const emailToSend = {
      name: emailForm.name,
      email: emailForm.email,
      subject: emailForm.subject,
      message: emailForm.message,
    }

    // handleValidation({ ...emailToSend })

    // POST LOGIC HERE
  }

  const props = {
    handleSubmit,
    errors,
    errorMessage,
    emailSent,
    setEmailForm,
    emailForm,
  }

  return <ContactForm {...props} />
}

export default Contact
