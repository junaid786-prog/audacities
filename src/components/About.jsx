import React from 'react'

const About = () => {
    return (
        <div className='section_mt about_section'>
            <section className='about_info'>
                <div>
                    <h4>LET’S MAKE BEAUTIFUL THINGS
                        TOGETHER
                    </h4>
                </div>
                <div className='contact_raw'>
                    <p>CONTACT RAW</p>
                    <p className='p_bold'>info@mysite.com
                        <br></br>
                        +123-456-7890
                    </p>
                </div>
            </section>
            <section className='address_section'>
                <div className='address_section_1 full_flex'>
                    <img src='https://static.wixstatic.com/media/c837a6_a4fbd813981546e59ff68e695db8285b~mv2.jpg/v1/fill/w_438,h_521,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eileen-pan-5d5DSRQ5dUc-unsplash.jpg' alt='address' />
                </div>
                <div className='address_section_2 full_flex'>
                    <div>
                        <p>Location</p>
                        <div>
                            <p className='p_bold'>SAN FRANCISCO</p>
                            <p>500 TERRY FRANCOIS STREET
                                SAN FRANCISCO, CA 94158</p>
                            <p>INFO@MYSITE.COM
                                <br />+123-456-7890
                            </p>
                        </div>
                        <div>
                            <p className='p_bold'>SAN FRANCISCO</p>
                            <p>500 TERRY FRANCOIS STREET
                                SAN FRANCISCO, CA 94158</p>
                            <p>INFO@MYSITE.COM
                                <br />+123-456-7890
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About