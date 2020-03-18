import React, {useRef, useEffect} from 'react';
import { TweenMax, Power3, TimelineMax } from 'gsap' 
import './navbar.css';


const Nav = () => {
    let app = useRef(null);
    let head = useRef(null);

    let tl = new TimelineMax({delay: .5})

    

    useEffect(() => {
        // e.preventDefault()
        const animation = head.children[0]
        const panIn = head.children[1]


        TweenMax.to(app, .2, {css: {visibility: 'visible'}})
        // cont content = head.children[0]

        tl.from(animation, 2, {x: -1200, ease:Power3.easeOut}, .2)
          .from(panIn, 2, {x:-1000,opacity: 0, ease:Power3.easeOut}, .3)
          .from(head, 2, {x:-1000, ease:Power3.easeOut}, .3)
    }, [tl])

    return (
        <div className="jumbotron" ref={el => app =el}>
            <header ref={el => head = el}>
                <div className="animated"/>
                <p className="intro">julie's hair works</p>
            </header>
        </div>    
    )
};

export default Nav;