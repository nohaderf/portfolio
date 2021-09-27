import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-scroll';

import NavBar from './components/NavBar';

import About from './components/About/About';
// import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import BlogsList from './components/Blog/BlogsList';
import Contact from './components/Contact/Contact';

export default function App() {
  console.log('Hello! This is Freda. Thanks for stopping by!')
    return (
        <>
        <div className="home" id="home">
        <Router>
          <NavBar />
        </Router>
        
          <img className="home-img" src="https://i.imgur.com/eSxeEq2.jpg" alt="Freda"></img>
              <div className="intro">
                  <div className="welcome"> 
                    <h1>Fullstack Developer</h1>
                    <p>Welcome! I'm a fullstack software developer with experience in 
                      React, JavaScript, CSS, HTML, Ruby on Rails and Python.
                      Oh, and did I mention? I'm familiar with Adobe Photoshop, too!    
                    </p>
                    <Link 
                        activeClass="active"
                        to="about"
                        smooth={true}
                        offset={-170}
                        duration={500}
                    >
                      <button className="learn-more-btn">Learn more</button>
                    </Link>
                  </div>
                  <div className="speech-bubble">
                    <span>Hello, I'm Freda. Welcome to my portfolio!</span>
                  </div>
              </div>

        </div>
        <div className="main-container">
          <About />
          {/* <Resume /> */}
          <Projects />
          <BlogsList />
          <Contact />
        </div> 
      </>
    );
}