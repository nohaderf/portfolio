import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import home from './images/IMG_2211_fade.png';
import NavBar from './components/NavBar';
// import InfoSection from './components/InfoSection'


import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';


import profile from './images/portfolio-profile.png';
import cyan from './images/portfolio-profile-cyan.png';
import blue from './images/portfolio-profile-blue.png';
import orange from './images/portfolio-profile-orange.png';


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
        <div className= "home">
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
                    <a href="#about">
                      <button className="get-started-btn">Learn more</button>
                    </a>
                    {/* <NavLink exact to="/about">
                      <button className="get-started-btn">Learn more</button>
                    </NavLink> */}
                    {/* <button onClick={handleClick} className="get-started-btn">Learn more</button> */}
                  </div>
                  <div className="speech-bubble">
                    <span>Hello, I'm Freda. Welcome to my portfolio!</span>
                  </div>
              </div>

        </div>
        <div className="main-container">
          {/* <InfoSection /> */}
          <About id="about" />
          <Resume id="resume" />
          {/* <Projects />
          <Blog /> */}
          {/* <Contact />  */}

          {/* <Switch>
            <Route exact path="/#about">
              <a name="about"><About /></a>
            </Route>
            <Route exact path="/#resume">
              <a name="resume"><Resume /></a>
            </Route>
            <Route exact path="/#projects">
              <Projects />
            </Route>
            <Route exact path="/#blog">
              <Blog />
            </Route>
            <Route exact path="/#contact">
              <Contact />
            </Route>
          </Switch> */}
          

          {/* <div className="profile-container">
            <div className="profile-imgs">
                <img src={profile} alt="Freda" className="profile-pic"/>
                <img src={blue} alt="Freda" className="profile-blue"/>
                <img src={cyan} alt="Freda" className="profile-cyan"/>
                <img src={orange} alt="Freda" className="profile-orange"/>
            </div>
            <div className="content-div">
                <h1>about</h1>
                <div>
                    <p>I'm a fullstack developer based in Toronto, Canada.</p>
                    <span>I have a creative eye with a passion for web design. 
                        Many of my personal projects feature small cameos from my Photoshopping hobby. 
                        When I'm not on the computer, you can find me experimenting on canvases,
                        hiking some scenic routes, or cuddled up in a corner with a good book. 
                    </span>
                </div>
            </div>
        </div>

        <div className="resume-div">
            <h1>resumé</h1>
            <iframe src="https://drive.google.com/file/d/1VQn7EjJFB5ZbLk64H7Wm0w6IOB4Jn5VO/preview" allow="autoplay"></iframe>
        </div> */}
        </div> 





      </>
    )
}

export default App;
