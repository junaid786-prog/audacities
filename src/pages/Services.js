import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Services = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="jobs_section section_mt">
        <div>
          <h4>WHAT WE DO</h4>
        </div>
        <div>
          <p>
            We innovate and create at the intersection of digital, advertising
            and design to provide the best possible impact for our clients &
            partners.
          </p>
        </div>
      </div>
      <div className="about_section">
        <section className="address_section services_bottom">
          <div className="address_section_1 full_flex services_1">
            <img
              src="https://static.wixstatic.com/media/c837a6_6aa6f4cc7fa94d94bd01d018119df690~mv2.png/v1/fill/w_438,h_521,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/alabaster-co-UdommT4taDY-unsplash.png"
              alt="address"
            />
          </div>
          <div className="address_section_2 full_flex services_2">
            <div>
              <p>SERVICES</p>
              <div>
                <p className="p_bold">STRATEGY</p>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
              <div>
                <p className="p_bold">ADVERTISING</p>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
              <div>
                <p className="p_bold">CONTENT</p>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
              <div>
                <p className="p_bold">VISUAL IDENTITY, DESIGN & WEB</p>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
              <div>
                <p className="p_bold">SOCIAL MEDIA & MARKETING</p>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Services
