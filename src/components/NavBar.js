import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            <div className="left">
                <Link to="home">
                    <img className="logo" src={logo} alt="FH" />
                </Link>
                <ul>
                    <li className="nav-item">
                        <Link 
                            activeClass="active"
                            to="about"
                            smooth={true}
                            offset={-170}
                            duration={500}
                        > about</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="resume"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > resumé</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > projects</Link></li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="blog"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > contact</Link>
                    </li>
                </ul>
            </div>

            <div className="right">
                <ul>
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
            </div>

            <div className="mobile-icon">
                <FaBars />
            </div>
            
        </div>
    )
}

export default NavBar;