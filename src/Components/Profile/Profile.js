import React from 'react'
import profileImg from "../../assets/images/Profile.jpg";
import "./Profile.css";
const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <h2>Vaisnavi Gundgire</h2>
            <div className='profile-img'>
                <img src={profileImg} />
            </div>
            <div className='profile-specialization'>
                <p>specialization</p>
                <h3>Full Stack Developer</h3>
            </div>
            <div className='profile-social-link'>
                <p>Follow me on social media</p>
                <div className='profile-social-icons'>
                    <i className="ri-facebook-line"></i>
                    <a href='https://github.com/vaishu1109' target='_blank'>
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href='https://www.instagram.com/vaishnavi_gundgire/' target='_blank'>
                        <i className="ri-instagram-line"></i>
                    </a>
                </div>
            </div>
            <button>let's Work Together!</button>
        </div>
    )
}

export default Profile
