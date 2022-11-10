import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Proposal from "./pages/Proposal"
import Job from "./pages/Job"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Work from "./pages/Work"
import AboutUs from "./pages/AboutUs"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/Proposal" element={<Proposal />} />
          <Route exact path="/jobs" element={<Job />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/about" element={<AboutUs />} />
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
