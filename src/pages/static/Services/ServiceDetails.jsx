import React, { useEffect, useState } from 'react';
import './ServicesDetails.css';
import Hero from '../../../components/Hero/Hero';
import { FaShieldHalved } from 'react-icons/fa6';
import {
    FiShield,
    FiLock,
    FiCheckCircle,
    FiAlertCircle,
    FiMonitor,
    FiTarget, FiSettings, FiActivity, FiAlertOctagon, FiTrendingUp, FiPhoneCall
} from 'react-icons/fi';
import { useGlobalContext } from '../../../global/context';
import PostCard from '../../../components/Post/PostCard';
import Accordion from '../../../components/Accordion/Accordion';

const ServiceDetails = () => {
    const [latestPosts, setLatestPosts] = useState();
    const { api } = useGlobalContext();

    const getLatestPosts = async () => {
        try {
            const res = await api.get(`/api/post/latest`);
            if (res?.status === 200) {
                console.log(res);
                setLatestPosts(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    useEffect(() => {
        getLatestPosts();
    }, []);

    return (
        <>
            <Hero
                heading="Defend Your Digital Assets with Our Cyber Security Solution"
                description="Empowering businesses and individuals to navigate the digital landscape securely."
                imgSrc="images/service/cyber-security.png"
                link="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2"
                linkText="Book a Appointment Now"
                linkTarget="_blank"
            />



            <section class="why-choose-us-two ">
                <div class="container">
                    <div class="sec-title">
                        <div class="row">
                            <div class="col-lg-6">
                                <span class="sub-title">Cyber Security Benefits</span>
                                <h2>See why you should<br /> choose cyber security</h2>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-end">
                                <div class="text">In today's interconnected world, cyber threats abound, posing significant risks to businesses and individuals alike. Our comprehensive cyber security solutions are designed to protect your digital assets and safeguard your peace of mind.</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div class="inner-column">
                                <div class="feature-block-six">
                                    <div class="inner-box">
                                        <span class="icon"><FiShield /></span>
                                        <h5 class="title">Advanced Threat Detection</h5>
                                        <div class="text">Utilize cutting-edge technologies to identify and neutralize cyber threats in real-time.</div>
                                    </div>
                                </div>

                                <div class="feature-block-six">
                                    <div class="inner-box">
                                        <span class="icon"><FiLock /></span>
                                        <h5 class="title">Data Encryption</h5>
                                        <div class="text">Secure sensitive information with robust encryption algorithms, ensuring confidentiality and integrity.</div>
                                    </div>
                                </div>

                                <div class="feature-block-six">
                                    <div class="inner-box">
                                        <span class="icon"><FiCheckCircle /></span>
                                        <h5 class="title">Compliance Assurance</h5>
                                        <div class="text">Ensure regulatory compliance with industry standards such as GDPR, HIPAA, and PCI-DSS.</div>
                                    </div>
                                </div>
                                {/* <div class="feature-block-six">
                                    <div class="inner-box">
                                        <span class="icon"><FiAlertCircle /></span>
                                        <h5 class="title">Incident Response</h5>
                                        <div class="text">Swift and effective response to security incidents, minimizing impact and facilitating recovery.</div>
                                    </div>
                                </div>
                                <div class="feature-block-six">
                                    <div class="inner-box">
                                        <span class="icon"><FiMonitor /></span>
                                        <h5 class="title">Continuous Monitoring</h5>
                                        <div class="text">Proactive monitoring and threat intelligence to stay ahead of evolving cyber threats.</div>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                        <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <div class="image-box">
                                    <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/why-us-1.jpg" alt="" /></figure>
                                    <figure class="image-2 overlay-anim wow fadeInRight"><img src="images/resource/why-us-2.jpg" alt="" /></figure>
                                    <figure class="logo"><img src="images/favicon.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-section-three">
                <div class="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">How It Works</span>
                        <h2>Discover how we safeguard <br />your digital journey.</h2>
                    </div>

                    <div class="row">
                        <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div class="inner-box">
                                <div class="content">
                                    <div class="icon-box"><span className="icon"><FiTarget /></span></div>
                                    <h5 class="title"><a href="page-service-details.html">Assessment</a></h5>
                                    <div class="text">Conduct a comprehensive assessment of your existing security posture and vulnerabilities.</div>
                                </div>
                                <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>

                        <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div class="inner-box">
                                <div class="content">
                                    <div class="icon-box"><span className="icon"><FiSettings /></span></div>
                                    <h5 class="title"><a href="page-service-details.html">Implementation</a></h5>
                                    <div class="text">Deploy customized security solutions based on assessment findings for cyber defense.</div>
                                </div>
                                <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>

                        <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div class="inner-box">
                                <div class="content">
                                    <div class="icon-box"><span className="icon"><FiActivity /></span></div>
                                    <h5 class="title"><a href="page-service-details.html">Monitoring</a></h5>
                                    <div class="text">Continuously monitor network traffic, logs, and user activity for signs of suspicious behavior.</div>
                                </div>
                                <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>


                        <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div class="inner-box">
                                <div class="content">
                                    <div class="icon-box"><span className="icon"><FiAlertOctagon /></span></div>
                                    <h5 class="title"><a href="page-service-details.html">Incident Response</a></h5>
                                    <div class="text">Swiftly respond to security incidents with predefined incident response procedures.</div>
                                </div>
                                <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section class="news-section">
                <div class="bg bg-pattern-1"></div>
                <div class="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">News & Articles</span>
                        <h2>Latest from the blog</h2>
                    </div>

                    <div class="row">
                        {
                            latestPosts?.map((post, i)=> (
                                <PostCard data={post} key={i}/>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Accordion/>

            {/* <!-- Video Section Two --> */}
            <section class="video-section-two p-0">
                <div class="container">
                    <div class="video-box-two">
                        <figure class="image"><img src="images/resource/video.jpg" alt="" />
                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" class="play-now" data-fancybox="gallery" data-caption=""><i class="icon fa fa-play" aria-hidden="true"></i><span class="ripple"></span></a>
                        </figure>

                        <div class="info-box">
                            <h2 class="title">1599</h2>
                            <div class="text">Projects have been<br /> completed</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Video Section Two --> */}

            {/* <!-- Contact Section Two --> */}
            <section class="contact-section-two pull-up pull-down">
                <div class="bg bg-pattern-14"></div>
                <div class="container">
                    <div class="row">
                        {/* <!-- Title Column --> */}
                        <div class="title-column col-lg-5 col-md-12">
                            <div class="inner-column">
                                <div class="sec-title light">
                                    <span class="sub-title">Get in touch</span>
                                    <h2>We are Here to<br /> Help You & Your<br /> Business</h2>
                                    <div class="text">Alteration in some form, lipsum is simply free text by injected humou or randomised</div>
                                </div>
                                <div class="timing">
                                    <span class="tilte">Timings</span>
                                    <div class="time">9:00 am - 5:00 pm</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Form Column --> */}
                        <div class="form-column col-lg-7 col-md-12 col-sm-12">
                            <div class="inner-column">
                                {/* <!-- Contact Form --> */}
                                <div class="contact-form style-two wow fadeInLeft">
                                    {/* <!--Contact Form--> */}
                                    <form method="post" action="" id="contact-form">
                                        <div class="row">
                                            <div class="form-group col-lg-6 col-md-6">
                                                <input type="text" name="full_name" placeholder="Your Name" required />
                                            </div>

                                            <div class="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Email" placeholder="Email Address" required />
                                            </div>

                                            <div class="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Phone" placeholder="Phone Number" required />
                                            </div>

                                            <div class="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Subject" placeholder="Subject" required />
                                            </div>

                                            <div class="form-group col-lg-12">
                                                <textarea name="message" placeholder="Write a Message" required></textarea>
                                            </div>

                                            <div class="form-group col-lg-12">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Send a message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!--End Contact Form --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Contact Section --> */}



            {/* <!-- Call To Action Two --> */}
            <section class="call-to-action-two">
                <div class="auto-container">
                    <div class="outer-box wow fadeIn">
                        <div class="title-box">
                            <h4 class="title">Get your <span class="colored">FREE</span><br /> cyber security consultation</h4>
                        </div>
                        <div class="icon-box">
                            <span className="icon"><FiPhoneCall /></span>
                        </div>
                        <div class="info-box">
                            <a href="tel:+11666999000" class="num">+11 - 666 999 000</a>
                            <a href="mailto:needhelp@yourdomain.com" class="mail">needhelp@yourdomain.com</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End Call To Action TWo --> */}



        </>
    )
}

export default ServiceDetails;