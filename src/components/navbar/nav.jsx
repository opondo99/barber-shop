import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggle'
import {TweenMax, TimelineLite, Power3} from 'gsap';

const Navigation = (props) => {
    let app = useRef(null);
    let links = useRef(null);

    let tl = new TimelineLite({delay: .8})

    useEffect(() => {
        // e.preventDefault()
        const logo = links.children[0]
        const linkItems = links.children[3]

        TweenMax.to(app, .2, {css: {visibility: 'visible'}})
    
        tl.from([logo, linkItems], 1, {y:-20, opacity:0 , ease: Power3.easeOut}, .0)
    })

    return (
        <div className="nav" ref={el => app = el}>
            <nav ref={el => links = el}>
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