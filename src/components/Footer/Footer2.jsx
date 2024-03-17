import React from 'react';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import Brand from "../../assets/logo-5.png";
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <>
            <footer class="main-footer">
                <div class="bg bg-pattern-9"></div>
                <div class="container">
                    <div class="subscribe-form">
                        <div class="title-column">
                            <h5 class="title"><span className="icon"><LiaEnvelopeOpenTextSolid /> </span> Subscribe now to get <br />latest updates</h5>
                        </div>
                        <div class="form-column">
                            <form method="post" action="#">
                                <div class="form-group">
                                    <input type="email" name="email" class="email" value="" placeholder="Email Address" required="" />
                                    <button type="button" class="theme-btn"><i class="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!--Widgets Section--> */}
                <div class="widgets-section">
                    <div class="container">
                        <div class="row">
                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-12 col-md-12">
                                <div class="footer-widget about-widget">
                                    <div class="logo"><a href="/"><img src={Brand} alt="" className='w-75' /></a></div>
                                    <div class="text fw-light">
                                    We collaborate closely with you to maximize our partnerships with top technology firms, ensuring optimal implementation, integration, and support. Harnessing cutting-edge solutions drives innovation and maximizes your tech investments.
                                    </div>
                                    <ul class="social-icon-two">
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div class="footer-widget links-widget">
                                    <h6 class="widget-title">Explore</h6>
                                    <ul class="user-links">
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Meet the Team</a></li>
                                        <li><a href="#">News & Media</a></li>
                                        <li><a href="#">Blogs & Articles</a></li>
                                        <li><a href="#">Trainings</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div class="footer-widget links-widget">
                                    <h6 class="widget-title">Our Services</h6>
                                    <ul class="user-links">
                                        <li><a href="#">Cloud Architecture</a></li>
                                        <li><a href="#">IT Infrastructure</a></li>
                                        <li><a href="#">Cyber Security</a></li>
                                        <li><a href="#">Business Optimazation</a></li>
                                        <li><a href="#">Cloud & Infra Security</a></li>
                                        <li><a href="#">Application Development</a></li>
                                        <li><a href="#">Service Management</a></li>
                                    </ul>
                                </div>
                                
                            </div>

                            {/* <!--Footer Column--> */}
                            {/* <div class="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
						<div class="footer-widget gallery-widget">
							<h6 class="widget-title">Portfolio</h6>
							<div class="widget-content">
								<div class="outer clearfix">
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-1.jpg" alt=""/></a>
									</figure>
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-2.jpg" alt=""/></a>
									</figure>
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-3.jpg" alt=""/></a>
									</figure>
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-4.jpg" alt=""/></a>
									</figure>
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-5.jpg" alt=""/></a>
									</figure>
									<figure class="image">
										<a href="#"><img src="images/resource/project-thumb-6.jpg" alt=""/></a>
									</figure>
								</div>
							</div>
						</div>
					</div> */}

                            {/* <!--Footer Column--> */}
                            {/* <div class="footer-column col-xl-3 col-lg-4 col-md-4">
						<div class="footer-widget contacts-widget">
							<h6 class="widget-title">Contact</h6>
							<div class="text">66 Road Broklyn Street, 600 New York, USA</div>
							<ul class="contact-info">
								<li><i class="fa fa-envelope"></i> <a href="mailto:needhelp@potisen.com">needhelp@company.com</a><br/></li>
								<li><i class="fa fa-phone-square"></i> <a href="tel:+926668880000">+92 666 888 0000</a><br/></li>
							</ul>
						</div>
					</div> */}

                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <h5 className='widget-title'><FaLocationArrow className='me-2' /> Corporate Office</h5>
                               <ul className="user-links">
                                <li>
                                <Link to="#">
                                    Coppell, Texas
                                </Link>
                                </li>
                               </ul>
                                <h5 className='widget-title'><FaPhoneAlt className='me-2' /> Call us on</h5>
                                <ul className="user-links">
                                <li><Link to="#">
                                USA: +1 (945) 278 5774
                                </Link></li>
                                <li>
                                <Link to='#'>
                                India: +91 (775) 788 1212
                                </Link>
                                </li>
                                </ul>
                                <h5 className='widget-title'><FaMessage className='me-2' /> Mail us on</h5>
                                <ul className="user-links">
                                    <li><Link to="#">
                                    info@coretechinfra.com
                                </Link>
                                </li>
                                <li>
                                <Link to="#">
                                    hr@coretechinfra.com
                                </Link>
                                </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Footer Bottom--> */}
                <div class="footer-bottom">
                    <div class="auto-container">
                        <div class="inner-container">
                            <div class="copyright-text"><p>&copy; {new Date().getFullYear()} Coretech Infrastructure Solutions, Inc. All Rights Reserved.</p></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2;