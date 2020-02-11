import React from 'react';
import { Link } from 'react-router-dom';
import './sidedrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side_drawer'
    if (props.show) {
        drawerClasses = 'side_drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <div className="side_drawer__links">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}
    

export default SideDrawer;