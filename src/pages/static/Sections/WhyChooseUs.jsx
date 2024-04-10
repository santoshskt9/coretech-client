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
                Building trust with our community is at the core of everything we do. For over a decade, we've been Saskatoon's IT security and development partner, safeguarding businesses in Martensville, Warman, and surrounding areas. Our commitment to innovation ensures your technology is secure, reliable, and helps you achieve your goals.
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
                            <h4>Technology</h4>
                            <p>
                            Analyze, architect, and co-create. We blend design, engineering, and analytics expertise to help you build the future.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Transformation</h4>
                            <p>Building great technology has always been core to what we do. We've partnered with hundreds of companies across every industry to solve their most complicated technical challenges</p>
                        </div>
                    </div>
                </div>
                <div className="items-col-2">
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Strategy</h4>
                            <p>Go beyond the expected - Redefine what's possible, give shape to the future and get there.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="featured-item d-flex">
                        <FaPiggyBank />
                        <div className="featured-item-content">
                            <h4>Dedicated</h4>
                            <p>New technologies. Shifting customers. Industry disruption. Business moves fast, and we specialize in working through change with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
