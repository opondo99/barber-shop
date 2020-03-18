import React, { Component } from 'react';
import './App.css';
import Main from './components/main/Main';
import Navigation from './components/navbar/nav';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/Sidedrawer/Sidedrawer';
// import {TweenMax} from 'gsap';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = (e) => {
    e.preventDefault();
    this.setState({
        sideDrawerOpen: false
    })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Main />
      </div>
    );
  }
}

export default App;
