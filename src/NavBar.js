import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from './images/fh-logo.png';

function NavBar(){
    const [navBar, setNavBar] = useState(false)

    function changeBackground() {
        if (window.scrollY >= 40) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return (
        <div className="nav-bar">
            <NavLink exact to="/">
                <img className="logo" src={logo} alt="FH" />
            </NavLink>
            <ul>
                {/* <li><NavLink exact to="/about">about</NavLink></li>
                <li><NavLink exact to="/resume">resumé</NavLink></li>
                <li><NavLink exact to="/project">projects</NavLink></li>
                <li><NavLink exact to="/blog">blog</NavLink></li>
                <li><NavLink exact to="/contact">contact</NavLink></li> */}


                <li><a href="#/about">about</a></li>
                <li><a href="#/resume">resumé</a></li>
                <li><a href="#/project">projects</a></li>
                <li><a href="#/blog">blog</a></li>
                <li><a href="#/contact">contact</a></li>
                <li><a href="https://github.com/nohaderf" target="_blank">
                    <i className="fab fa-github"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/in/freda-hon/" target="_blank">
                <i className="fab fa-linkedin"></i>
                </a></li>
                <li><a href="https://medium.com/@freda.hon" target="_blank">
                <i className="fab fa-medium"></i>
                </a></li> 
                <li><a href="mailto:freda.hon@gmail.com" target="_blank">
                <i class="fas fa-envelope"></i>
                </a></li>
            </ul>
        </div>
    )
}

export default NavBar;