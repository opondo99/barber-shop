import React from 'react';
import './footer.css';
import Instagram from '../images/icons/icons8-instagram-480 (1).png';
import Facebook from '../images/icons/icons8-facebook-50 (3).png';
import Twitter from '../images/icons/icons8-twitter-96.png';
import Location from '../images/icons/icons8-location-240.png';
import Contact from '../images/icons/icons8-phone-90.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                {/* <h3>
                    Follow Us
                </h3> */}
                <ul>
                    <a><img src={Instagram} alt="instagram" /></a>
                    <a><img src={Facebook} alt="facebook" /></a>
                    <a><img src={Twitter} alt="twitter" /></a>
                </ul>
            </div>
            <div className="bottom">

                <div className="contacts">
                    <div className="heading">
                        <img src={Contact} alt="location"/>
                        <h3>Contact</h3>
                    </div>
                    <ul>
                        <li>
                            +254 795133547
                        </li>
                        <li>
                            markopondo.m@gmail.com
                        </li>
                    </ul>
                    <a href="/contact">
                        SEND EMAIL
                    </a>
                </div>

                <div className="location">
                    <div className="heading">
                        <img src={Location} alt="location"/>
                        <h3>Location</h3>
                    </div>
                    <div>
                        Nairobi, Kenya<br />
                        Kikuyu road, Kwang'ang'a flats 3rd floor
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;