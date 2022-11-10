import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer_section'>
            <div className='footer_top_box full_flex'>
                <h2 className='top_box_h'>
                    WHAT’S NEXT STARTS HERE.
                </h2>
                <p>Get in touch at <Link to='/' className='c_w'>info@mysite.com</Link></p>
            </div>
            <div className='footer_below_boxes'>
                <div className='footer_box_1 footer_box'>
                    <div className='footer_box_1_above footer_box_above'>
                        <div className='subscription_box full_flex'>
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <div className='send_email'>
                                <p>Email *</p>
                                <input></input>
                            </div>
                            <button className='send_email_button'>Send</button>
                        </div>
                    </div>
                    <div className='footer_box_1_below footer_box_below'>
                        <ul className='full_flex'>
                            <li>Work</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='footer_box_2 footer_box'>
                    <div className='footer_box_2_above footer_box_above'>
                        <img src='https://static.wixstatic.com/media/c837a6_88807c793bed480caa2c5c3681c502da~mv2.jpg/v1/fill/w_378,h_394,fp_0.50_0.66,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_88807c793bed480caa2c5c3681c502da~mv2.jpg' alt='front pic'></img>
                    </div>
                    <div className='footer_box_2_below footer_box_below'>
                        <ul className='full_flex'>
                            <li>INSTAGRAM</li>
                            <li>TWITTER</li>
                            <li>FACEBOOK</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer