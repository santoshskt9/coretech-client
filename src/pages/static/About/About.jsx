import React from 'react'
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';
import './About.css';
import { FaBuildingColumns, FaChartSimple, FaShieldHalved } from 'react-icons/fa6';
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { FaCloudscale } from 'react-icons/fa';
import TeamSection from '../Sections/TeamSection';
import TeamSection2 from '../Sections/TeamSection2';
import ClientsSlider from '../Sections/ClientsSlider';

const partners = {
    title: "Our Clients",
    subTitle: "Clients",
    slides: [
        "https://conglobase.com/assets/media/Varients/SVG/conglobase_original.svg",
        "https://www.marquistech.com/wp-content/uploads/2020/02/logo.png",
        "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/partners/altezzasys.png",
        "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/partners/Spyne+Black+png.webp"
    ],
};

const About = () => {
    return (
        <>
            <BreadCrumb2
                heading="About Us"
            />

            <section class="about-section-two">
                <div class="container">
                    <div class="row">
                        <div class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div class="inner-column">

                                <div class="sec-title">
                                    <span class="sub-title">Welcome to Coretech</span>
                                    <h2>Our Company</h2>
                                    <div class="text">Founded in 2023 and headquartered in Texas, USA, Coretech Infrastructure Solutions Inc. specializes in providing innovative IT services and solutions that cater to businesses of all sizes across various industries.</div>
                                    {/* <p class="text">Our comprehensive suite of IT services includes:</p> */}
                                </div>

                                <div class="row">
                                    <div class="about-block col-lg-6 col-md-6">
                                        <div class="inner-box">
                                            <i class="icon flaticon-user-interface"></i>
                                            <h6 class="title">Managed IT Services</h6>
                                            <div class="text">Ensuring smooth, uninterrupted IT operations with 24/7 support.</div>
                                        </div>
                                    </div>

                                    <div class="about-block col-lg-6 col-md-6">
                                        <div class="inner-box">
                                            <i class="icon flaticon-front-end"></i>
                                            <h6 class="title">Cybersecurity Solutions</h6>
                                            <div class="text">Protecting assets from cyber threats with cutting-edge security technologies.</div>
                                        </div>
                                    </div>

                                    <div class="about-block col-lg-6 col-md-6">
                                        <div class="inner-box">
                                            <i class="icon flaticon-front-end"></i>
                                            <h6 class="title">Cloud Services</h6>
                                            <div class="text">Offering scalable and flexible cloud computing solutions to drive business innovation.</div>
                                        </div>
                                    </div>

                                    <div class="about-block col-lg-6 col-md-6">
                                        <div class="inner-box">
                                            <i class="icon flaticon-front-end"></i>
                                            <h6 class="title">Software Development</h6>
                                            <div class="text">Creating custom software solutions tailored to meet specific business needs.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <a href="page-about.html" class="theme-btn btn-style-one"><span class="btn-title">Explore now</span></a> */}
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-3.jpg" alt="" /></figure>
                                <figure class="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-4.jpg" alt="" /></figure>
                                <div class="experience bounce-y">
                                    <div class="inner">
                                        <i class="icon flaticon-design"></i>
                                        <div class="text">Founded<br /> 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section container p-0 mb-5">
                
                <div className="row row-cols-1 row-cols-lg-2  mb-5">

                    <div className="col p-5 ">
                        <h1 className='text-warning'>Our Vision</h1>
                        <p>Our vision is to be a global leader in IT services, pioneering innovations that redefine technology landscapes and set new industry standards. We aim to connect businesses of all sizes with emerging technologies, fostering a world where technology creates unlimited opportunities for growth and innovation.
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/about/mission.jpg" alt="about" className='w-100 rounded-3' />
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <img src="https://img.freepik.com/free-photo/flight-aviation-cloudy-aircraft-airplane_1172-277.jpg?t=st=1713715859~exp=1713719459~hmac=0a27aae777940a5bc6cb7cbdd52850271c6a635f2e72f1524d0cddde891d30a1&w=740" alt="about" className='w-100 rounded-3' />
                    </div>
                    <div className="col p-5">
                        <h1 className='text-warning'>Our Mission</h1>
                        <p>Our mission is to empower businesses with cutting-edge IT solutions that enhance operational efficiency and drive digital transformation. We commit to delivering reliable, scalable, and secure IT services tailored to meet the diverse needs of our clients, ensuring they can focus on their core business goals with confidence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services-section container pt-0">
                <div className="container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Services we’re offering to <br />our customers.</h2>
                    </div>

                    <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudscale className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">Cloud Architecture</a></h5>
                                <div className="text">Streamline infrastructure, optimize performance, secure data.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBuildingColumns className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">IT Infrastructure</a></h5>
                                <div className="text">Optimize networks, enhance operations with IT Infrastructure Excellence.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">Cyber Security</a></h5>
                                <div className="text">Safeguard data, protect networks, mitigate risks.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">Business Optimization</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">Service Management</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="page-service-details.html">Cloud & Infra Security</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-box">
                        <div className="text">Trust the experts for all your <strong>web design & development</strong> needs.</div>
                        <a href="page-services.html" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                    </div>
                </div>
            </section>

            <ClientsSlider
                data={partners}
                autoplay={false}
                dots={false}
            />

            <TeamSection2 />
        </>
    )
}

export default About;