import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function ClientsSlider({ data, autoplay, dots, infinite }) {
    const settings = {
        dots: dots || true,
        infinite: infinite || true,
        // speed: 10,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: autoplay || true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container container">

            <div class="sec-title text-center">
                <span class="sub-title">{data?.subTitle}</span>
                <h2>{data?.title}</h2>
            </div>
            <Slider {...settings}>
                {
                    data?.slides?.map((imgSrc, i) => (
                        <div className="slide-logo" key={i}>
                            <Link to="#">
                                <img src={imgSrc} alt="" />
                            </Link>
                        </div>
                    ))
                }


            </Slider>
        </div>
    );
}

export default ClientsSlider;
