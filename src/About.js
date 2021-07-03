import profile from './images/portfolio-profile.png';
import cyan from './images/portfolio-profile-cyan.png';
import blue from './images/portfolio-profile-blue.png';
import orange from './images/portfolio-profile-orange.png';

function About() {
    return (
        <div className="profile-container">
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
                    Many of my personal projects feature small cameos from my Photoshopping hobby.</span>
                    <span>When I'm not on the computer, you can find me experimenting on canvases,
                        hiking some scenic routes, or cuddled up in a corner with a good book. 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About;