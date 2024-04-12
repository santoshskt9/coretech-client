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
            {/* <div className="client-slider-head">
                <h4 className='fadeInLeft text-center'>/ Technologies</h4>
                <h1 className='fadeInUp text-center'>We Deliver Expertise</h1>
            </div> */}
            <div class="sec-title text-center">
                <span class="sub-title">Service Partners</span>
                <h2>We Deliver Expertise</h2>
            </div>
            <Slider {...settings}>
                <div className="slide-logo">
                    <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/vmware.jpg" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/azure.png" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/gcp.png" alt="" />
                </div>
                <div className="slide-logo">
                    <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/aws-logo.webp" alt="" />
                </div>

            </Slider>
        </div>
    );
}

export default ClientsSlider;
