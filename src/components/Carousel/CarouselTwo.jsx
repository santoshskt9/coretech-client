import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';


const Carousel = ({videos, slideContent}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const handleSlideNavigation = (index) => {
        setActiveSlide(index);
    };

    
    const [timer, setTimer] = useState(0); // Separate state for timer

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1); // Increment timer state
      }, 5000);
    
      return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
      const nextSlideIndex = (activeSlide + 1) % slideContent.length;
      setActiveSlide(nextSlideIndex);
    }, [timer]); // Update activeSlide only when timer changes
    return (
        <>
            <section className='hero-slider-two' ref={sliderRef}>
                {videos?.map((videoSrc, index) => (
                    <video
                        key={index}
                        className={`video-slide ${activeSlide === index ? 'active' : ''}`}
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                    />
                ))}
                {slideContent?.map((slide, index) => (
                    <div className={`container slider-content py-5 animated ${slide.animation} ${activeSlide === index ? 'active' : ''}`}>
                        <h1 className='fw-bold animated mb-4 text-uppercase'>{slide?.title}</h1>
                        <h5 className='animated mb-4'>{slide?.description}</h5>
                        <button className='btn btn-warning rounded-5 fw-bold animated'>{slide?.buttonText}</button>
                    </div>
                ))}

                <div className="slider-navigation">
                    {slideContent?.map((_, index) => (
                        <div
                            key={index}
                            className={`nav-btn ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => handleSlideNavigation(index)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Carousel;