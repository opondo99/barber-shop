import React from 'react';
import Styling from '../images/icons/icons8-rupaul-100.png';
import HairCut from '../images/icons/icons8-barber-scissors-96.png';
import HairCleaning from '../images/icons/icons8-hair-washing-sink-100.png';
import BlowDry from '../images/icons/icons8-hair-dryer-100.png';
import Locks from '../images/icons/icons8-reggae-100.png';
import './services.css';

const Services = () => {
    return (
        <div className="services">
            <div className="card">
                <img src={HairCut} alt="Hair cut"/>
                <h3 className="description">Hair Cuts</h3>
            </div>
            <div className="card">
                <img src={Styling} alt="Hair cut"/>
                <h3 className="description">Hair Styling</h3>
            </div>
            <div className="card">
                <img src={HairCleaning} alt="Hair cut"/>
                <h3 className="description">Hair Cleaning</h3>
            </div>
            <div className="card">
                <img src={BlowDry} alt="Hair cut"/>
                <h3 className="description">Blow drying</h3>
            </div>
            <div className="card">
                <img src={Locks} alt="Hair cut"/>
                <h3 className="description">Interlocking and maintenance</h3>
            </div>
        </div>
    )
}

export default Services;