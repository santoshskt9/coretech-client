import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const SubServicesSection = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <section class="services-section-two">
                <div class="bg bg-pattern-10"></div>

                <div class="container">
                    <div class="upper-box row">
                        <div class="left-column col-lg-6 col-md-12">
                            <div class="sec-title light">
                                <span class="sub-title">What We’re Offering under VAPT</span>
                                <h2>Services we’re <br />offering to clients to <br />secure thier business</h2>
                            </div>
                        </div>

                        <div class="right-column col-lg-6 col-md-12">
                            <div class="fact-counter-three">
                                {/* <!-- Counter block--> */}
                                <div class="counter-block-three wow fadeInUp">
                                    <div class="inner">
                                        <div class="count-box"><span class="count-text" data-speed="3000" data-stop="15">0</span>+</div>
                                        <h6 class="counter-title">Audits Performed</h6>
                                    </div>
                                </div>

                                {/* <!--Counter block--> */}
                                <div class="counter-block-three" data-wow-delay="300ms">
                                    <div class="inner">
                                        <div class="count-box"><span class="count-text" data-speed="3000" data-stop="195">0</span>+</div>
                                        <h6 class="counter-title">Amount Saved</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="video-box">
                                <figure class="image"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/image-4.jpg" alt="" /></figure>
                                <Link to="https://www.youtube.com" target='_blank' class="play-btn" data-fancybox="gallery" data-caption=""><i class="icon fa fa-play" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div class="outer-box">
                        <div class="services-carousel">
                            <Slider {...settings}>
                                {/* <!-- Service Block Two --> */}
                                <div class="service-block-two p-1">
                                    <div class="inner-box">
                                        <span class="count">01</span>
                                        <div class="icon-box"><i class="icon flaticon-color-sample"></i></div>
                                        <h5 class="title"><a href="page-service-details.html">Web Application Security Testing </a></h5>
                                        <div class="text">Ensure the security of your web applications through comprehensive testing.</div>
                                    </div>
                                </div>

                                {/* <!-- Service Block Two --> */}
                                <div class="service-block-two p-1">
                                    <div class="inner-box">
                                        <span class="count">02</span>
                                        <div class="icon-box"><i class="icon flaticon-front-end"></i></div>
                                        <h5 class="title"><a href="page-service-details.html">Network Security Testing</a></h5>
                                        <div class="text">Evaluate the security of your network infrastructure to prevent unauthorized access.</div>
                                    </div>
                                </div>

                                {/* <!-- Service Block Two --> */}
                                <div class="service-block-two p-1">
                                    <div class="inner-box">
                                        <span class="count">03</span>
                                        <div class="icon-box"><i class="icon flaticon-online-shopping"></i></div>
                                        <h5 class="title"><a href="page-service-details.html">System Security Testing</a></h5>
                                        <div class="text">Assess the security of your systems and servers to identify vulnerabilities.</div>
                                    </div>
                                </div>

                                {/* <!-- Service Block Two --> */}
                                <div class="service-block-two p-1">
                                    <div class="inner-box">
                                        <span class="count">04</span>
                                        <div class="icon-box"><i class="icon flaticon-advertising"></i></div>
                                        <h5 class="title"><a href="page-service-details.html">API Security Testing</a></h5>
                                        <div class="text">Ensure the security of your APIs to protect data and prevent unauthorized access.</div>
                                    </div>
                                </div>

                                {/* <!-- Service Block Two --> */}
                                <div class="service-block-two p-1">
                                    <div class="inner-box">
                                        <span class="count">05</span>
                                        <div class="icon-box"><i class="icon flaticon-advertising"></i></div>
                                        <h5 class="title"><a href="page-service-details.html">Android Application Security Testing</a></h5>
                                        <div class="text">Evaluate the security of your Android applications to identify and fix vulnerabilities.</div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div class="bottom-box">
                        <div class="text">Make your first quality web and app design & development <a href="page-services.html" class="theme-btn">Find Your Solution</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubServicesSection;