import React from 'react';
import Nav from '../navbar/Navbar';
import Services from '../services/Services';
import Prices from '../prices/Prices';
import Schedule from '../schedule/Schedule';
import Work from '../work/Work';
import Footer from '../footer/Footer';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <h1>Services</h1>
            <Services />
            <div className="info">
                <Prices />
                <Schedule />
            </div>
            <Work />
            <Footer />
        </div>
    )
}

export default Home;