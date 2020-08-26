import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./Navbar.css"

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  const [isTop, setIsTop] = useState(false)

  const showMenu = sidebarOpen ? "show mobile-menu" : ""

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const windowsIsTop = window.scrollY < 100

      setIsTop(windowsIsTop)
    })
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg NavBarComponent	d-flex ${
        isTop ? "navbar-transparent" : "navbar-colored"
      }`}
    >
      <Link className="navbar-brand" to="/" id="nav-name">
        <span className="full-text">ÁNGEL LUIS HERNÁNDEZ HERRERO</span>
        <span className="short-text">ÁNGEL HERNÁNDEZ</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleSidebar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="link-item nav-link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-item nav-link" to="/stack">
              STACK
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-item nav-link" to="/projects">
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-item nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
