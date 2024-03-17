import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaPiggyBank } from "react-icons/fa";

function WhyChooseUs({ featuredContent }) {
    return (
        <section className="featured-2 container">

            <div className="featured-content-2 fadeInLeft">
                <h4 className='fadeInLeft'>/ Why Coretech?</h4>
                <h1 className='fadeInUp'>The Coretech Difference</h1>
                <p className='fadeInUp'>
                For over a decade, we've been a proud service provider, earning and maintaining the trust of the community in Saskatoon, Martensville, Warman, and surrounding areas.
                </p>

                <div className="featured-actions">
                    <div className="action-link fadeInUp">
                        <Link to={"#"}>Call Now {" "} <FaChevronRight /></Link>
                    </div>
                    <div className="action-link  fadeInUp">
                        <Link to={"#"}>Book Free Estimate {" "} <FaChevronRight /></Link>
                    </div>
                </div>
            </div>
            <div className="featured-content-3 fadeInRight">
                <div className="items-col-1">
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Competative Pricing</h4>
                            <p>Experience quality without breaking the bank - we offer fair and competitive pricing.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Certified Experts</h4>
                            <p>Experience quality without breaking the bank - we offer fair and competitive pricing.</p>
                        </div>
                    </div>
                </div>
                <div className="items-col-2">
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Competative Pricing</h4>
                            <p>Experience quality without breaking the bank - we offer fair and competitive pricing.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Certified Experts</h4>
                            <p>Experience quality without breaking the bank - we offer fair and competitive pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
