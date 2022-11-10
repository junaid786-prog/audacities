import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='navbar'>
            <div className='logo_section full_flex'>
                <Link to='/'><h3 style={{ color: 'black' }}>Corporate Events</h3></Link>
            </div>
            <div className='links_section'>
                <div className={toggle ? 'd_none' : 'navbar_menu'} onClick={() => setToggle(!toggle)}>
                    <MenuIcon />
                </div>
                <ul className={!toggle ? 'd_none' : 'menu_list'}>
                    <CloseIcon className='close_menu' onClick={() => setToggle(!toggle)} />
                    <Link to='/work' className='decoration_none c_b'><li>Work</li></Link>
                    <Link to='/about' className='decoration_none c_b'><li>About Us</li></Link>
                    <Link to='/contact' className='decoration_none c_b'><li>Contact</li> </Link>
                    <Link to='/services' className='decoration_none c_b'><li>Services</li></Link>
                    <Link to='/jobs' className='decoration_none c_b'><li>Jobs</li></Link>
                    <Link to='/proposal' className='decoration_none c_b'><li className='selected_navbar_option'>Request Propsal</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar