import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
// import Services from '../services/Services';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="/services" component={Services}/> */}
        </Switch>
    )
}

export default Main;