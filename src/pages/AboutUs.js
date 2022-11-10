import React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../css/aboutus.css"
const AboutUs = () => {
  return (
    <div className="page">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default AboutUs
