import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/fh-logo.png';
import HamburgerNav from './HamburgerNav';

export default function NavBar(){
    const [width, setWidth] = useState();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);            
        if (width < 750) {
            setIsShow(true)
        } else if (width > 750) {
            setIsShow(false)
        }
    }, [window.innerWidth])

    return (
        <div className="nav-bar">
            <div className="left">
                <Link to="home">
                    <img className="logo" src={logo} alt="FH" />
                </Link>
                <ul>
                    <li>
                        <Link to="home">
                            <strong>[ FREDA HON ]</strong>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            activeClass="active"
                            to="about"
                            smooth={true}
                            offset={-170}
                            duration={500}
                        > about</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="resume"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > resumé</Link>
                    </li> */}
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
                    <li className="nav-item"><a href="https://github.com/nohaderf" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/freda-hon/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a></li>
                    <li><a href="https://medium.com/@freda.hon" target="_blank" rel="noreferrer">
                    <i className="fab fa-medium"></i>
                    </a></li> 
                    <li><a href="mailto:freda.hon@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope"></i>
                    </a></li>
                </ul>
                { isShow && <HamburgerNav /> }
            </div>

            {/* <div className="mobile-icon">
                <FaBars />
            </div> */}
        </div>
    );
}