import React from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';

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
           <SubServicesSection/>
           
           
            
            {/* <section id="resources" class="py-5">
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
            </section> */}



        </>
    )
}

export default VAPT;