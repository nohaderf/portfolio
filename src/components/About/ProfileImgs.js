import React from 'react';
import profile from './Images/portfolio-profile.png';
import cyan from './Images/portfolio-profile-cyan.png';
import blue from './Images/portfolio-profile-blue.png';
import orange from './Images/portfolio-profile-orange.png';

export default function ProfileImgs() {
    return (
        <div className="profile-imgs">
            <img src={profile} alt="Freda" className="profile-pic"/>
            <img src={blue} alt="Freda" className="profile-blue"/>
            <img src={cyan} alt="Freda" className="profile-cyan"/>
            <img src={orange} alt="Freda" className="profile-orange"/>
        </div>
    );
}
