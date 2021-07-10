import React, { useState } from 'react';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from 'react-icons/fa';
import logo from '../images/fh-logo.png';

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
            <LinkR exact to="/">
                <img className="logo" src={logo} alt="FH" />
            </LinkR>
            <ul>
                {/* <li><NavLink exact to="/about">about</NavLink></li>
                <li><NavLink exact to="/resume">resumé</NavLink></li>
                <li><NavLink exact to="/project">projects</NavLink></li>
                <li><NavLink exact to="/blog">blog</NavLink></li>
                <li><NavLink exact to="/contact">contact</NavLink></li> */}


                <li className="nav-item">
                    <LinkS
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > about</LinkS>
                </li>
                <li className="nav-item">
                    <LinkS
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > resumé</LinkS>
                </li>
                <li className="nav-item">
                    <LinkS
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > projects</LinkS></li>
                <li className="nav-item">
                    <LinkS
                        activeClass="active"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > blog</LinkS>
                </li>
                <li className="nav-item">
                    <LinkS
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > contact</LinkS>
                </li>
                <li className="nav-item"><a href="https://github.com/nohaderf" target="_blank">
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
            <div className="mobile-icon">
                <FaBars />
            </div>
            
        </div>
    )
}

export default NavBar;