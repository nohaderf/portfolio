import React, { useState } from 'react';
import logo from './images/fh-logo.png';
// import { NavLink , useHistory} from "react-router-dom";
// import {LoginContext} from './Login';

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
            <img className="logo" src={logo} alt="FH" />
            <ul>
                <li>about</li>
                <li>resumé</li>
                <li>projects</li>
                <li>blog</li>
                <li>contact</li>
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
                {/* <li>
                    <NavLink exact to="/exercises">
                        <strong>EXERCISES</strong>  
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/workouts">
                        <strong>WORKOUTS</strong>      
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile">
                        <strong>PROFILE</strong>      
                    </NavLink>
                </li>  */}
        </div>
    )
}

    // return (
    //     <nav className={navBar ? "nav-bar active" : "nav-bar"}>
    //         {/* <NavLink exact to="/">
    //             <img className={smallLogo ? "logo active" : "logo"} src={logo} alt="Krunch" />
    //         </NavLink> */}
    //         <ul>
    //             <li>
    //                 <NavLink exact to="/">
    //                     <strong>HOME</strong>  
    //                 </NavLink>
    //             </li>
    //             {loggedIn ? headerLinksObj() : history.push(`/`)}         
    //         </ul>
    //         <p className="login" onClick={toggle}>{loggedIn ? "LOGOUT" : "LOGIN"}</p>
    //     </nav>
    // )

export default NavBar;