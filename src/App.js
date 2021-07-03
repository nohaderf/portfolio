import React from 'react';
import home from './images/IMG_2211_fade.png';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';

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
                    <button className="get-started-btn">Learn more</button>
                  </div>
                  <div className="speech-bubble">
                    <span>Hello, I'm Freda. Welcome to my portfolio!</span>
                  </div>
              </div>
        </div>
        <div className="main-container">
          <About />
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
        <div className="content-div">
          <h1>contact</h1>
          <p>Feel free to reach out or connect with me!</p>
          <p className="text">
            <span>E-mail:</span> freda.hon@gmail.com</p>
          <p className="text">
            <span>LinkedIn:</span> <a href="https://www.linkedin.com/in/freda-hon/">freda-hon</a></p>
          <p className="text">
            <span>Medium:</span> <a href="https://medium.com/@freda.hon">@freda.hon</a></p>
        </div> */}
        
      </>
    )
}

export default App;
