import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        // speed: 10,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container container">
            <div className="client-slider-head">
            <h4 className='fadeInLeft text-center'>/ Technologies</h4>
            <h1 className='fadeInUp text-center'>We Deliver Expertise</h1>
            </div>
            <Slider {...settings}>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-1.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-2.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-3.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-4.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-1.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-2.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-3.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretechinfra.com/assets/images/team-4.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default ClientsSlider;
