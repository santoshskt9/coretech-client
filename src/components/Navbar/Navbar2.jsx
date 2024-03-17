import React from 'react'

const Navbar2 = () => {
  return (
    <div class="container-fluid">
				
				<div class="main-box">
					<div class="logo-box">
						<div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title="Tronis"/></a></div>
					</div>

					<div class="nav-outer">
						<nav class="nav main-menu">
							<ul class="navigation">
								<li class="current dropdown"><a href="index.html">Home</a>
									<ul>
										<li><a href="index.html">Home page 01</a></li>
										<li><a href="index-2.html">Home page 02</a></li>
										<li><a href="index-3.html">Home page 03</a></li>
										<li class="dropdown"><a href="#">Single</a>
											<ul>
												<li><a href="index-1-single.html">Home Single 1</a></li>
												<li><a href="index-2-single.html">Home Single 2</a></li>
												<li><a href="index-3-single.html">Home Single 3</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Dark</a>
											<ul>
												<li><a href="index-1-dark.html">Home Dark 1</a></li>
												<li><a href="index-2-dark.html">Home Dark 2</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Boxed</a>
											<ul>
												<li><a href="index-1-boxed.html">Home Boxed 1</a></li>
												<li><a href="index-2-boxed.html">Home Boxed 2</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">RTL</a>
											<ul>
												<li><a href="index-1-rtl.html">Home RTL 1</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Header Styles</a>
											<ul>
												<li><a href="index.html">Header Style One</a></li>
												<li><a href="index-2.html">Header Style Two</a></li>
												<li><a href="index-3.html">Header Style three</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Pages</a>
									<ul>
										<li><a href="page-about.html">About</a></li>
										<li class="dropdown"><a href="#">Projects</a>
											<ul>
												<li><a href="page-projects.html">Projects List</a></li>
												<li><a href="page-project-details.html">Project Details</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Team</a>
											<ul>
												<li><a href="page-team.html">Team List</a></li>
												<li><a href="page-team-details.html">Team Details</a></li>
											</ul>
										</li>
										<li><a href="page-testimonial.html">Testimonial</a></li>
										<li><a href="page-pricing.html">Pricing</a></li>
										<li><a href="page-faq.html">FAQ</a></li>
										<li><a href="page-404.html">Page 404</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Services</a>
									<ul>
										<li><a href="page-services.html">Services List</a></li>
										<li><a href="page-service-details.html">Service Details</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Shop</a>
									<ul>
										<li><a href="shop-products.html">Products</a></li>
										<li><a href="shop-products-sidebar.html">Products with Sidebar</a></li>
										<li><a href="shop-product-details.html">Product Details</a></li>
										<li><a href="shop-cart.html">Cart</a></li>
										<li><a href="shop-checkout.html">Checkout</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">News</a>
									<ul>
										<li><a href="news-grid.html">News Grid</a></li>
										<li><a href="news-details.html">News Details</a></li>
									</ul>
								</li>
								<li><a href="page-contact.html">Get in Touch</a></li>
							</ul>
						</nav>

					</div>

					<div class="outer-box">
						<div class="ui-btn-outer">
							<button class="ui-btn ui-btn search-btn">
								<span class="icon lnr lnr-icon-search"></span>
							</button>
						</div>

						<a href="tel:+92(8800)9806" class="info-btn">
							<i class="icon fa fa-phone"></i>
							<small>Call Anytime</small>+ 88 ( 9800 ) 6802-00
						</a>

						<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
  )
}

export default Navbar2