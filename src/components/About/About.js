import React, { useEffect, useState } from 'react';
import ProfileImgs from './ProfileImgs';

export default function About() {
    const [width, setWidth] = useState();
    const [isShow, setIsShow] = useState(true);
    const [showBook, setShowBook] = useState(false);

    // window.addEventListener('resize', handleResize);

    // function handleResize(){
    //     setWidth(window.innerWidth);            
    //     if (width < 1250) {
    //         setIsShow(false)
    //     } else if (width > 1250) {
    //         setIsShow(true)
    //     }
    // }

    useEffect(() => {
        setWidth(window.innerWidth);            
        if (width < 1250) {
            setIsShow(false)
        } else if (width > 1250) {
            setIsShow(true)
        }
    }, [width])

    function handleShowBook(){
        setShowBook(!showBook);
    }

    return (
        <div className="container" id="about">
            <div className="about-div">
                { isShow && <ProfileImgs /> }
                <div className="about-content">
                    <h1>about</h1>
                    <p>I'm a full stack developer, based in Toronto, well versed in JavaScript, ReactJS, HTML, CSS, postgreSQL, Python and Ruby on Rails. 
                        I possess strong skills in Adobe Photoshop and have experience with converting images to HTML/CSS layouts. Additionally, I am adept in component performance optimization, scalable software design, designing and translating wireframes, and building reusable cross platform components.
                    </p>
                    <p>
                        When I'm not on the computer, you can find me experimenting on paint canvases,
                        hiking some scenic routes, or cuddled up in a corner with a good book. Ask me what I'm currently reading!
                    </p>
                    <button className="book" onClick={handleShowBook}>What are you reading ?</button>
                    { showBook ? <p>An oldie, but goldie, <em>The Girl with the Dragon Tattoo</em></p> : null }
                </div>
            </div>
        </div>
    );
}