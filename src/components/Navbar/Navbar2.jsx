import React from 'react';
import './Navbar2.css';
import Brand from "../../assets/logo-4.png";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
	return (
		<>
			<header className="main-header header-style-two sticky-top shadow-sm">
			

				<div className="header-lower">
					<div className="container-fluid">
						{/* <!-- Main box --> */}
						<div className="main-box">
							<div className="logo-box">
								<div className="logo"><Link to="/"><img src={Brand} height={50} alt="" title="Tronis"/></Link></div>
							</div>

							{/* <!--Nav Box--> */}
							<div className="nav-outer">
								<nav className="nav main-menu">
									<ul className="navigation">
										<li><Link to="/">Home</Link>
											
										</li>
										<li className="dropdown"><Link to="/about" className='d-flex align-items-center'>About <MdOutlineKeyboardArrowDown/> </Link>
											<ul>
												<li><Link to="/about">Company</Link></li>
												<li><Link to="/team">Team</Link></li>
												<li><Link to="/partners">Partners</Link></li>
												<li><Link to="/clients">Clients</Link></li>
												<li><Link to="/mission">Mission & Vision</Link></li>
											</ul>
										</li>
										<li className="dropdown"><Link to="/services" className='d-flex align-items-center'>Services <MdOutlineKeyboardArrowDown/></Link>
											<ul>
												<li><Link to="/service-details">Cloud Architecture</Link></li>
												<li><Link to="#">IT Infrastructure</Link></li>
												<li><Link to="#">Cyber Security</Link></li>
												<li><Link to="#">Business Optimization</Link></li>
												<li><Link to="#">Service Management</Link></li>
												<li><Link to="#">Cloud & Infra Security</Link></li>
												<li><Link to="#">Application Development</Link></li>
											</ul>
										</li>
										<li className="dropdown"><Link to="/training" className='d-flex align-items-center'>Learn <MdOutlineKeyboardArrowDown/></Link>
											<ul>
												<li><Link to="/training">Training</Link></li>
												<li><Link to="/training">Certiification</Link></li>
												<li><Link to="/training">Webinar</Link></li>
											</ul>
										</li>
										<li className="dropdown"><Link to="/blogs" className='d-flex align-items-center'>Insight Hub <MdOutlineKeyboardArrowDown/></Link>
											<ul>
												<li><Link to="#">News</Link></li>
												<li><Link to="#">Blogs</Link></li>
												<li><Link to="#">Articles</Link></li>
												<li><Link to="#">Case Studies</Link></li>
											</ul>
										</li>
										{/* <li><Link to="/career">Career</Link></li> */}
										<li><Link to="/contact">Get in Touch</Link></li>
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
							<div className="nav-logo"><Link to="/"><img src="images/logo.png" alt="" title=""/></Link></div>
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
									<Link to="tel:+92880098670">+92 (8800) - 98670</Link>
								</div>
							</li>
							<li>
								{/* <!-- Contact Info Box --> */}
								<div className="contact-info-box">
									<span className="icon lnr-icon-envelope1"></span>
									<span className="title">Send Email</span>
									<Link to="mailto:help@company.com">help@company.com</Link>
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
							<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
							<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
							<li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
							<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
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
								<Link to="/" title=""><img src="images/logo-2.png" alt="" title=""/></Link>
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