import React from 'react';
import './TeamSection.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
    return (
        <section className="container-fluid team-section">
            <div className="container team-content">
            <div className="client-slider-head">
                <h4 className='fadeInLeft text-warning'>/ Team</h4>
                <h1 className='fadeInUp text-white '>Meet our team</h1>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src="images/about/santosh.jpg" />
                </div>
                <div class="caption">
                    <h3>Santosh Kumar</h3>
                    <p>Full Stack Developer</p>
                    <div class="social-links">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src="images/about/santosh.jpg" />
                </div>
                <div class="caption">
                    <h3>Kailash Nath</h3>
                    <p>Front End Developer</p>
                    <div class="social-links">
                    <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src="images/about/santosh.jpg" />
                </div>
                <div class="caption">
                    <h3>Saurabh Sharma</h3>
                    <p>Back End Developer</p>
                    <div class="social-links">
                    <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default TeamSection