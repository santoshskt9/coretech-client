import React from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
];

const slideContent = [
    {
        title: "Comprehensive Security Assessment",
        description: "Identify vulnerabilities across your network, applications, and systems with our comprehensive security assessment.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },
    {
        title: "Proactive Threat Detection",
        description: "Stay ahead of cyber threats with proactive detection and continuous monitoring of your IT infrastructure.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },
    {
        title: "Expert Penetration Testing",
        description: "Leverage our team of experienced security experts to conduct thorough penetration testing and secure your assets.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },

];

const VAPT = () => {
    return (
        <>
            <CarouselTwo videos={videos[0]} slideContent={slideContent} />
            <FeatureSectionTwo/>
            <IntroductionSection/>
            <WhySection/>
            <ProcessSection/>
           
           
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">VAPT Services</h2>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Web Application Security Testing</h3>
                                    <p className="card-text">Ensure the security of your web applications through comprehensive testing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Network Security Testing</h3>
                                    <p className="card-text">Evaluate the security of your network infrastructure to prevent unauthorized access.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">System Security Testing</h3>
                                    <p className="card-text">Assess the security of your systems and servers to identify vulnerabilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">API Security Testing</h3>
                                    <p className="card-text">Ensure the security of your APIs to protect data and prevent unauthorized access.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Android Application Security Testing</h3>
                                    <p className="card-text">Evaluate the security of your Android applications to identify and fix vulnerabilities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-choose-us" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-5">Why Choose Us?</h2>
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h3 class="card-title">Expertise and Experience</h3>
                                    <p class="card-text">We have extensive expertise and experience in the field of cybersecurity.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h3 class="card-title">Skilled Professionals</h3>
                                    <p class="card-text">Our team consists of skilled and certified security professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h3 class="card-title">Proven Track Record</h3>
                                    <p class="card-text">We have a proven track record of successful VAPT projects.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h3 class="card-title">Customized Solutions</h3>
                                    <p class="card-text">We provide customized solutions tailored to our clients' specific needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to VAPT and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about VAPT methodologies and best practices.</p>
                                    <a href="#" class="btn btn-primary">Download Whitepapers</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Industry Reports</h5>
                                    <p class="card-text">Access industry reports and surveys on cybersecurity trends and threats.</p>
                                    <a href="#" class="btn btn-primary">View Reports</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default VAPT;