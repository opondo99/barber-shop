import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { Power4 } from 'gsap';


import Worker1 from './images/photo-of-man-leaning-on-concrete-surface-3180364.jpg';
import Worker2 from './images/photo-of-man-wearing-grey-vest-3376069.jpg';
import Worker3 from './images/photo-of-man-wearing-watch-3221005.jpg';
import Worker4 from './images/portrait-of-a-woman-wearing-polka-dots-3298594.jpg';
import Worker5 from './images/woman-wearing-orange-long-sleeved-turtleneck-top-2997541.jpg';
import Worker6 from './images/woman-wearing-white-turtleneck-top-3290244.jpg';
import './about.css';

const About = () => {
    // const sectionRef = useRef(null)

    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: "40px",
    //     threshold: 1
    // });

    // const fadeIn = element => {
    //     gsap.to(element, 1, {
    //         opacity: 1,
    //         y: -30,
    //         ease: "Power4.Out",
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };


    // const fadeOut = element => {
    //     // gsap.to(element, 1, {
    //     //     opacity: 0,
    //     //     y: -20,
    //     //     ease: "Power4.out"
    //     // });
    // };

    // intersection && intersection.intersectionRatio < 1
    //     ? fadeIn(".fadeIn") : fadeOut(".fadeIn")

    return (
        <div className="about">
            <h1 className="team-logo">The Team</h1>
            <div className="fadeIn">
            <div className="team">

                <div className="worker">
                    <img src={Worker1} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
                <div className="worker">
                    <img src={Worker2} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
                <div className="worker">
                    <img src={Worker3} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
                <div className="worker">
                    <img src={Worker4} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
                <div className="worker">
                    <img src={Worker5} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
                <div className="worker">
                    <img src={Worker6} alt="worker"/>
                    <div>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur dicta autem error inventore voluptatem!</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='fadeIn'>

            
            <div className="company">
                <div className="start">
                    <h1>The Company</h1>
                    <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil possimus labore quia corporis laudantium? Voluptatem, dolores asperiores commodi possimus est excepturi, beatae repudiandae iure dolorum ratione eaque mollitia blanditiis molestiae placeat harum nemo expedita consequuntur. Possimus molestias a atque in tempora, tempore sapiente consequuntur facere pariatur enim laboriosam vel eos modi inventore facilis repudiandae, ipsum laborum voluptates totam aliquam, ipsam ea exercitationem? Saepe voluptates ea labore asperiores laudantium, dolore quas qui et dolores libero iure praesentium modi natus quae ad. Repellendus dolorum quaerat, in aspernatur voluptates reiciendis praesentium perspiciatis officia earum fugit, tempora est? Vero distinctio odit voluptatum, tempora eos doloremque, accusamus eaque dolore qui laborum eius voluptate est a, corporis perferendis recusandae ipsa quibusdam! Nemo dolores asperiores possimus odio assumenda. Necessitatibus omnis iure quis architecto, atque quod aliquid vel adipisci quaerat minus consequuntur amet. Quo, quis, fugit, iste eius odit deleniti consectetur ullam ducimus vel possimus laborum. Porro distinctio consequuntur, dolore exercitationem eum quidem cupiditate at quasi aperiam illo suscipit, sint aspernatur voluptate pariatur quisquam id accusamus assumenda nam consectetur fugit nobis eveniet, sapiente voluptas! Sit incidunt, quibusdam a voluptates nesciunt quo porro ratione perferendis, facilis eaque earum placeat numquam tempora obcaecati alias optio amet expedita maiores hic non.
                    </p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default About;