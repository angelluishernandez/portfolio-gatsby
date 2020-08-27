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

  const handleChange = e => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value,
    })
  }

  // This method is necessary for netlify contact form to work

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...emailForm }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const props = {
    handleSubmit,
    errors,
    errorMessage,
    emailSent,
    setEmailForm,
    emailForm,
    handleChange,
  }

  return <ContactForm {...props} />
}

export default Contact
