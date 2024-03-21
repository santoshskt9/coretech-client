import React from 'react';
import './Hero.css';

const Hero = ({heading, description, imgSrc, link, linkText}) => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col hero-content text-white">
                            <h1 className="hero-title">{heading}</h1>
                            <p className="hero-description">{description}</p>
                            <a href={link? link : "#"} className="theme-btn btn-style-one"><span className="btn-title">{linkText}</span></a>
                        </div>
                        <div className="col-4 hero-image">
                            {/* Insert a beautiful and relevant image related to cyber security */}
                            <img src={imgSrc} alt="Cyber Security" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;