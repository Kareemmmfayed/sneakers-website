import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import profile from '../images/image-avatar.png'
import logo from '../images/logo.svg'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
        <div className='navbar'>
            <FontAwesomeIcon icon={click? faXmark : faBars} className='logo' onClick={handleClick} />
            <div className='name'>
            <img src={logo} alt='logo' />
            </div>
            <ul className = {click? "menu active" : "menu"} >
                <FontAwesomeIcon icon={click? faXmark : faBars} className='logo haha' onClick={handleClick} />
                <li>Collection</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='icons'>
                <FontAwesomeIcon icon={faCartShopping} className='cart'/>
                <img src={profile} alt='profile' className='profile'/>
            </div>
        </div>
        <div className='line'></div>
        </>
    )
}

export default NavBar