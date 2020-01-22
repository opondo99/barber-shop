import React from 'react';
import './work.css';
import Shave from '../images/grayscale-photo-of-man-wearing-champion-sweater-3214950.jpg';
import Dreads from '../images/man-in-green-crew-neck-sweater-near-red-wall-2698935.jpg';
import Casual from '../images/photo-of-woman-wearing-white-shirt-2616962.jpg';
import Wedding from '../images/standing-woman-wearing-white-long-sleeved-dress-3014937.jpg';
import Children from '../images/smiling-girl-2995309.jpg';
import Party from '../images/woman-in-peach-color-and-red-floral-sweatshirt-holding-gray-794062.jpg';
import Coloring from '../images/selective-focus-photography-of-woman-2071660.jpg';
import Studio from '../images/woman-in-black-strapless-dress-3284031.jpg';
import Natural from '../images/woman-closes-her-eyes-raising-her-right-hand-1666073.jpg'

const Work = () => {
    return (
        <div className="work">
            <h1>Work</h1>
            <div className="tabs">
                <div className="tab fade">
                    <img src={Shave} alt="shaved man"/>
                    <p className="transitiontext">Hair Cut</p>
                </div>
                <div className="tab">
                    <img src={Dreads} alt="dreads"/>
                    <p className="transitiontext">Dreads</p>
                </div>
                <div className="tab">
                    <img src={Casual} alt="street casual hairstyle"/>
                    <p className="transitiontext">Street Casual</p>
                </div>
                <div className="tab">
                    <img src={Wedding} alt="wedding hairstyle"/>
                    <p className="transitiontext">Wedding</p>
                </div>
                <div className="tab">
                    <img src={Children} alt="Childrens hairstyle"/>
                    <p className="transitiontext">Children</p>
                </div>
                <div className="tab">
                    <img src={Party} alt="party hairstyle"/>
                    <p className="transitiontext">Party</p>
                </div>
                <div className="tab">
                    <img src={Coloring} alt="colored hair"/>
                    <p className="transitiontext">Coloring</p>
                </div>
                <div className="tab">
                    <img className="studio" src={Studio} alt="studio hairstyle"/>
                    <p className="transitiontext">Studio</p>
                </div>
                <div className="tab">
                    <img src={Natural} alt="Natural Hairstyle"/>
                    <p className="transitiontext">Natural</p>
                </div>
                
            </div>
       </div>
    )
}

export default Work;