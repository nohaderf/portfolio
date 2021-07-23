import profile from './Images/portfolio-profile.png';
import cyan from './Images/portfolio-profile-cyan.png';
import blue from './Images/portfolio-profile-blue.png';
import orange from './Images/portfolio-profile-orange.png';

export default function About() {
    return (
        <div className="container" id="about">
            <div className="about-div">
                <div className="profile-imgs">
                    <img src={profile} alt="Freda" className="profile-pic"/>
                    <img src={blue} alt="Freda" className="profile-blue"/>
                    <img src={cyan} alt="Freda" className="profile-cyan"/>
                    <img src={orange} alt="Freda" className="profile-orange"/>
                </div>
                <div className="about-content">
                    <h1>about</h1>
                    <p>I'm a full stack developer, based in Toronto, who left medicine to pursue a creative path in software development.
                        While it is an uncommon career change, web design has always been a passion of mine, 
                        and I believe that software development can bring more change and impact in the world 
                        than my previous role in medicine.
                    </p>
                    <p>I am well versed in JavaScript, ReactJS, HTML, CSS, postgreSQL, Python and Ruby on Rails. 
                        I possess strong skills in Adobe Photoshop and have experience with converting images to HTML/CSS layouts. Additionally, I am adept in component performance optimization, scalable software design, designing and translating wireframes, and building reusable cross platform components.
                    </p>
                    <span>
                        When I'm not on the computer, you can find me experimenting on canvases,
                        hiking some scenic routes, or cuddled up in a corner with a good book. 
                    </span>
                </div>
            </div>
        </div>
    );
}