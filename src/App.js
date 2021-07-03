import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import home from './images/IMG_2211_fade.png';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';


function App() {
    return (
        <>
        <NavBar />
        <div className= "home">
          <img className="home-img" src={home} alt="Freda"></img>
              <div className="intro">
                  <div className="welcome"> 
                    <h1>Fullstack Developer</h1>
                    <p>Welcome! I'm a fullstack software developer well versed in 
                      React, JavaScript, CSS, HTML, Ruby on Rails and Python.
                      Oh, and did I mention? I'm also a Photoshop enthusiast, too!    
                    </p>
                    <NavLink exact to="/about">
                      <button className="get-started-btn">Learn more</button>
                    </NavLink>
                  </div>
                  <div className="speech-bubble">
                    <span>Hello, I'm Freda. Welcome to my portfolio!</span>
                  </div>
              </div>
        </div>
        <div className="main-container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          
        </div>
        {/* <div className="content-div">
        
        </div> */}
        {/* <div className="content-div">
          <h1>resumé</h1>
        </div>
        <div className="content-div">
          <h1>projects</h1>
        </div>
        <div className="content-div">
          <h1>blog</h1>
        </div>
  */}
        
      </>
    )
}

export default App;
