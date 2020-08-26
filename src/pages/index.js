import React from "react"
import Layout from "../components/Layout/Layout"
import AboutComponent from "../components/About/About"
import "../styles/styles.css"

export default function Home() {
  return (
    <Layout>
      <AboutComponent />
    </Layout>
  )
}
