import React, { useState } from 'react';
import ProfileImgs from './ProfileImgs';

export default function About() {
    const [width, setWidth] = useState();
    const [isShow, setIsShow] = useState(true);

    window.addEventListener('resize', handleResize);

    function handleResize(){
        setWidth(window.innerWidth);            
        if (width < 1250) {
            setIsShow(false)
        } else if (width > 1250) {
            setIsShow(true)
        }
    }
    return (
        <div className="container" id="about">
            <div className="about-div">
                { isShow && <ProfileImgs /> }
                <div className="about-content">
                    <h1>about</h1>
                    <p>I'm a full stack developer, based in Toronto, who left medicine to pursue a creative path in software development.
                        While it is an uncommon career change, web design has always been a passion of mine.I believe that software development can bring more change and impact in the world 
                        than my previous role in medicine.
                    </p>
                    <p>I am well versed in JavaScript, ReactJS, HTML, CSS, postgreSQL, Python and Ruby on Rails. 
                        I possess strong skills in Adobe Photoshop and have experience with converting images to HTML/CSS layouts. Additionally, I am adept in component performance optimization, scalable software design, designing and translating wireframes, and building reusable cross platform components.
                    </p>
                    <p>
                        When I'm not on the computer, you can find me experimenting on canvases,
                        hiking some scenic routes, or cuddled up in a corner with a good book. 
                    </p>
                </div>
            </div>
        </div>
    );
}