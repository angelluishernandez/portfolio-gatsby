import React, { useState } from "react"
import ContactForm from "./ContactForm"

const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
    setEmailSent(false)
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
      .then(() => {
        setEmailSent(true)
        resetForm()
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  const props = {
    handleSubmit,
    emailSent,
    setEmailForm,
    emailForm,
    handleChange,
  }

  return <ContactForm {...props} />
}

export default Contact
