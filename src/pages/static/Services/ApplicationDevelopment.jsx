import React, { useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
];



const ApplicationDevelopment = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const slideContent = [
        {
            title: "Empower Your Business with Cutting-Edge Solutions",
            description:  "Unlock the potential of your business with our innovative software solutions. From seamless automation to enhanced customer experiences, we have you covered.",
            buttonText:  "Explore Solutions",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Streamline Operations, Boost Productivity",
            description: "Transform your workflow with our integrated solutions tailored to your needs. Say goodbye to manual processes and hello to increased efficiency.",
            buttonText:  "Learn More",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Join the Ranks of Satisfied Clients",
            description:  "Discover why our clients rave about our solutions. With a proven track record of success, we deliver results that exceed expectations.",
            buttonText:  "See Success Stories",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Partner with Us for Your Next Success Story",
            description:   "Take the next step towards achieving your business goals. Partner with us to unlock unlimited possibilities and propel your business forward.",
            buttonText: "Get Started Today",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
    
    ];

    const introduction = {
        sectionTitle: "Introduction",
        title: "What is Application Development",
        description: "Application development is a critical function for any company that wants to leverage technology to enhance its business processes, reach new customers, or provide new services. If a company is considering developing applications, whether for internal use or for a customer-facing product, there are several steps and considerations to take into account to ensure success.",
        paragraphs: [],
        features: [
            // {
            //     title: "Vulnerability Assessment",
            //     description: "VA identifies and quantifies vulnerabilities in the system.",
            //     iconClass: "flaticon-user-interface"
            // },
            // {
            //     title: "Penetration Testing",
            //     description: "Exploit these vulnerabilities to assess the effectiveness.",
            //     iconClass: "flaticon-front-end"
            // },
        ],
        cta: {
            buttonText: "Explore now",
            buttonLink: "#"
        },
        images: [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ],
    };

    return (
        <>
            <CarouselTwo videos={videos[0]} slideContent={slideContent} />
            {/* <FeatureSectionTwo /> */}
            <IntroductionSection data={introduction}/>
            <WhySection />
            <ProcessSection />
            <SubServicesSection />

            <VAPTFormSection ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to ApplicationDevelopment and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about ApplicationDevelopment methodologies and best practices.</p>
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

export default ApplicationDevelopment;