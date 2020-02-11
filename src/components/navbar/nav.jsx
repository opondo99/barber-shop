import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggle'

const Navigation = (props) => {
    return (
        <div className="nav">
            <nav>
                <div className="logo">
                    <Link to='/'>Hair Works</Link>
                </div>
                <div className="spacer"/>
                <div className="burger">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    {/* <Link to='/services'>Services</Link> */}
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
    )
};

export default Navigation;