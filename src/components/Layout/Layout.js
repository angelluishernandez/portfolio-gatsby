import React, { useState } from "react"
import Navbar from "./Navbar"
import LowerNavbar from "./LowerNavbar"

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      {children}
      <LowerNavbar />
    </>
  )
}

export default Layout
