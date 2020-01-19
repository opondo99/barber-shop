import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navigation = () => {
    return (
            <nav>
                <div className="logo">
                    <p>Hair Works</p>
                </div>
                <div className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    {/* <Link to='/services'>Services</Link> */}
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        
    )
};

export default Navigation;