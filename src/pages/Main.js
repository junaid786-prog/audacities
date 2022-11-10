import React from "react"
import FeaturedWork from "../components/FeaturedWork"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import WeAre from "../components/WeAre"
import "../css/main.css"
const Main = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <WeAre />
      <FeaturedWork />
      <Footer />
    </div>
  )
}

export default Main
