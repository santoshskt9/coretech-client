import React from 'react';
import './Navbar2.css';
import Brand from "../../assets/logo-4.png";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Navbar2 = () => {
	return (
		<>
			<header className="main-header header-style-two sticky-top shadow-sm">
			

				<div className="header-lower">
					<div className="container-fluid">
						{/* <!-- Main box --> */}
						<div className="main-box">
							<div className="logo-box">
								<div className="logo"><a href="/"><img src={Brand} height={50} alt="" title="Tronis"/></a></div>
							</div>

							{/* <!--Nav Box--> */}
							<div className="nav-outer">
								<nav className="nav main-menu">
									<ul className="navigation">
										<li><a href="/">Home</a>
											
										</li>
										<li className="dropdown"><a href="/about" className='d-flex align-items-center'>About <MdOutlineKeyboardArrowDown/> </a>
											<ul>
												<li><a href="page-about.html">Company</a></li>
												<li><a href="page-about.html">Partners</a></li>
												<li><a href="page-about.html">Clients</a></li>
												<li><a href="page-about.html">Mission & Vision</a></li>
											</ul>
										</li>
										<li className="dropdown"><a href="/services" className='d-flex align-items-center'>Services <MdOutlineKeyboardArrowDown/></a>
											<ul>
												<li><a href="/service-details">Cloud Architecture</a></li>
												<li><a href="#">IT Infrastructure</a></li>
												<li><a href="#">Cyber Security</a></li>
												<li><a href="#">Business Optimization</a></li>
												<li><a href="#">Service Management</a></li>
												<li><a href="#">Cloud & Infra Security</a></li>
												<li><a href="#">Application Development</a></li>
											</ul>
										</li>
										<li className="dropdown"><a href="/training" className='d-flex align-items-center'>Learn <MdOutlineKeyboardArrowDown/></a>
											<ul>
												<li><a href="/training">Training</a></li>
												<li><a href="/training">Certiification</a></li>
												<li><a href="/training">Webinar</a></li>
											</ul>
										</li>
										<li className="dropdown"><a href="/blogs" className='d-flex align-items-center'>Insight Hub <MdOutlineKeyboardArrowDown/></a>
											<ul>
												<li><a href="#">News</a></li>
												<li><a href="#">Blogs</a></li>
												<li><a href="#">Articles</a></li>
												<li><a href="#">Case Studies</a></li>
											</ul>
										</li>
										<li><a href="/career">Career</a></li>
										<li><a href="/contact">Get in Touch</a></li>
									</ul>
								</nav>
								{/* <!-- Main Menu End--> */}
							</div>

							
						</div>
					</div>
				</div>

				{/* <!-- Mobile Menu  --> */}
				<div className="mobile-menu">
					<div className="menu-backdrop"></div>

					{/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
					<nav className="menu-box">
						<div className="upper-box">
							<div className="nav-logo"><a href="/"><img src="images/logo.png" alt="" title=""/></a></div>
							<div className="close-btn"><i className="icon fa fa-times"></i></div>
						</div>

						<ul className="navigation clearfix">
							{/* <!--Keep This Empty / Menu will come through Javascript--> */}
						</ul>
						<ul className="contact-list-one">
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<i className="icon lnr-icon-phone-handset"></i>
									<span className="title">Call Now</span>
									<a href="tel:+92880098670">+92 (8800) - 98670</a>
								</div>
							</li>
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<span className="icon lnr-icon-envelope1"></span>
									<span className="title">Send Email</span>
									<a href="mailto:help@company.com">help@company.com</a>
								</div>
							</li>
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<span className="icon lnr-icon-clock"></span>
									<span className="title">Send Email</span>
									Mon - Sat 8:00 - 6:30, Sunday - CLOSED
								</div>
							</li>
						</ul>


						<ul className="social-links">
							<li><a href="#"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i className="fab fa-pinterest"></i></a></li>
							<li><a href="#"><i className="fab fa-instagram"></i></a></li>
						</ul>
					</nav>
				{/* </div><!-- End Mobile Menu --> */}

				</div>

				{/* <!-- Sticky Header  --> */}
				<div className="sticky-header">
					<div className="auto-container">
						<div className="inner-container">
							{/* <!--Logo--> */}
							<div className="logo">
								<a href="/" title=""><img src="images/logo-2.png" alt="" title=""/></a>
							</div>

							{/* <!--Right Col--> */}
							<div className="nav-outer">
								{/* <!-- Main Menu --> */}
								<nav className="main-menu">
									<div className="navbar-collapse show collapse clearfix">
										<ul className="navigation clearfix">
											{/* <!--Keep This Empty / Menu will come through Javascript--> */}
										</ul>
									</div>
								</nav>
								{/* <!-- Main Menu End--> */}

								{/* <!--Mobile Navigation Toggler--> */}
								<div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Sticky Menu --> */}
			</header>
		</>
	)
}

export default Navbar2;