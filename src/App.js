import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-scroll';

import home from './images/IMG_2211_fade.png';
import NavBar from './components/NavBar';

import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle(){
    setIsOpen(!isOpen)
  }

    // function handleClick(e) {
    //   e.preventDefault()
    //   window.location.replace("/about")
    // }

    return (
        <>
        <div className="home" id="home">
        <Router>
          <NavBar />
        </Router>
        
          <img className="home-img" src={home} alt="Freda"></img>
              <div className="intro">
                  <div className="welcome"> 
                    <h1>Fullstack Developer</h1>
                    <p>Welcome! I'm a fullstack software developer well versed in 
                      React, JavaScript, CSS, HTML, Ruby on Rails and Python.
                      Oh, and did I mention? I'm also a Photoshop enthusiast, too!    
                    </p>
                    <Link 
                        activeClass="active"
                        to="about"
                        smooth={true}
                        offset={-170}
                        duration={500}
                    >
                      <button className="get-started-btn">Learn more</button>
                    </Link>
                  </div>
                  <div className="speech-bubble">
                    <span>Hello, I'm Freda. Welcome to my portfolio!</span>
                  </div>
              </div>

        </div>
        <div className="main-container">
          <About />
          <Resume />
          <Projects />
          <Blog />
          <Contact />
        </div> 
      </>
    )
}

export default App;
