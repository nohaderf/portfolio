import React from 'react';
import home from './images/IMG_2211_fade.png';
import NavBar from './NavBar';

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
      </>
    )
}

export default App;
