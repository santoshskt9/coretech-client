import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col hero-content text-white">
                            <h1 className="hero-title">Defend Your Digital Assets with Our Cyber Security Solution</h1>
                            <p className="hero-description">Empowering businesses and individuals to navigate the digital landscape securely.</p>
                            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                        </div>
                        <div className="col-4 hero-image">
                            {/* Insert a beautiful and relevant image related to cyber security */}
                            <img src="images/service/cyber-security.png" alt="Cyber Security" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;