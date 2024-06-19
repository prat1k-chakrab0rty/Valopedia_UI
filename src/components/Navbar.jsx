import React from 'react'
import Logo from '../imgs/logo.png';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={Logo} alt="" />
                <span>Valopedia</span>
            </div>
            <div className="links">
                <p>Maps</p>
                <p>Agents</p>
                <p>Weapons</p>
            </div>
        </div>
    )
}

export default Navbar