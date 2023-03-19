import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/sandeep-logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="" data-aos='zoom-in-right' />
                </div>

                <div className="nav" data-aos='zoom-in-left'>
                    <Link to="/home" >Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/skills">Projects</Link>
                    <Link to="/skills">Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
