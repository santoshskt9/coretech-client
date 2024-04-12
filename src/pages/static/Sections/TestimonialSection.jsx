import React from 'react'
import CounterBlockTwo from '../../../components/Counter/CounterBlockTwo';
import Slider from 'react-slick';
import { DockTwoTone } from '@mui/icons-material';

const TestimonialSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0, textAlign: 'center' }}>
                {dots.map((dot, index) => (
                    <li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
                        {dot}
                    </li>
                ))}
            </ul>
        ),
        customPaging: i => (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            />
        ),
    };

    return (
        <>
            <div className="testimonial-section-three">
                <div className="container-fluid p-0">
                    <div className="outer-box">
                        <div className="carousel-outer">
                            <Slider {...settings}>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="thumb">
                                            <img src="images/resource/thumb-5.jpg" alt="" />
                                            <span className="icon fa fa-quote-right"></span>
                                        </div>
                                        <div className="text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refreshing to get such a personal touch.</div>
                                        <h6 className="name">Kevin Martin <span className="designation"> - &nbsp; Co founder</span></h6>
                                    </div>
                                </div>
                                <div class="testimonial-block-three">
                                    <div class="inner-box">
                                        <div class="thumb">
                                            <img src="images/resource/thumb-5.jpg" alt="" />
                                            <span class="icon fa fa-quote-right"></span>
                                        </div>
                                        <div class="text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a
                                            personal touch.</div>
                                        <h6 class="name">Kevin martin <span class="designation"> - &nbsp; Co founder</span></h6>
                                    </div>
                                </div>
                                <div class="testimonial-block-three">
                                    <div class="inner-box">
                                        <div class="thumb">
                                            <img src="images/resource/thumb-5.jpg" alt="" />
                                            <span class="icon fa fa-quote-right"></span>
                                        </div>
                                        <div class="text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a
                                            personal touch.</div>
                                        <h6 class="name">Kevin martin <span class="designation"> - &nbsp; Co founder</span></h6>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="banner-box">
                            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/banner-1.jpg)' }}>
                                <h3 className='fs-1 fw-bold'>Our organization is <br />one of the most<br /> successful<br /> organization.</h3>
                                <a href="page-about.html" className="theme-btn btn-style-one light"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>

                        <div className="fact-counter-two">
                            <div className="row">
                                <CounterBlockTwo iconClass="flaticon-campaign" count={300} title="Clothes Washed & Dry Cleaned" delay="0ms" />
                                <CounterBlockTwo iconClass="flaticon-social-campaign" count={489} title="Customers are Happy & Satisfied" delay="300ms" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSection;