import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PropsalForm from "../components/PropsalForm"

const Proposal = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="jobs_section section_mt">
        <div>
          <h4>SEND PROPOSAL</h4>
        </div>
        <div>
          <p>
            We're looking for talented people who are constantly pursuing the
            next big thing. Apply to join our stellar team.
          </p>
        </div>
      </div>
      <PropsalForm />
      <Footer />
    </div>
  )
}

export default Proposal
