import React from 'react';
import './home.css';
import '../Sections/Sections.css';
import Carousel from '../../../components/Carousel/Carousel';
import Featured from '../../../components/Featured/Featured';
import TeamSection from '../Sections/TeamSection';
import ClientsSlider from '../Sections/ClientsSlider';
import WhyChooseUs from '../Sections/WhyChooseUs';
import TeamSection2 from '../Sections/TeamSection2';
import BlogSection from '../Sections/BlogSection';
import AboutSection from '../Sections/AboutSection';
import WhatWeDoSection from '../Sections/WhatWeDoSection';
import TestimonialSection from '../Sections/TestimonialSection';
import CTASection from '../Sections/CTASection';

const Home = () => {

    const videos = [
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/pixels.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/network.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4',
    ];

    const slideContent = [
        {
            title: 'Healthcare Opportunity',
            description: 'Looking for a perfect healthcare job?',
            buttonText: 'Learn More About Jobs',
            animation: 'fadeInUp',
        },
        {
            title: 'Network with Professionals',
            description: 'Need a professionals?',
            buttonText: 'Explore Our Network',
            animation: 'fadeInRight',
        },
        {
            title: 'Security and Compliance',
            description: 'Want to secure your infrastructure?',
            buttonText: 'Learn More About Security',
            animation: 'fadeInLeft',
        },
        {
            title: 'Automation Services',
            description: 'Coretech provides cloud and automation services to help businesses achieve their IT objectives',
            buttonText: 'Learn More About Automation Services',
            animation: 'fadeInLeft',
        },
    ];

    const featuredContent = {
        sectionName: "About Us",
        title: "Who we are",
        description: "At Coretech, we believe technology is the fuel for a brighter future. Our purpose is to ignite your potential, helping individuals and organizations dream bigger, move faster, and build a better tomorrow.",
        content: {
            para: "We achieve this by providing comprehensive IT consulting services. We help you:",
            list: [
                {
                    heading: "Solidify your software foundation",
                    description: "We optimize your software architecture for agility and scalability, ensuring it supports your growth."
                },
                {
                    heading: "Craft a winning digital strategy",
                    description: "We collaborate with you to develop a tech-driven roadmap that aligns perfectly with your business goals."
                },
                {
                    heading: "Streamline your software portfolio",
                    description: "We identify opportunities to optimize your software ecosystem, maximizing efficiency and cost-effectiveness."
                }
            ],
        },
        analytics: [
            {
                count: "500+",
                name: "Projects Done",
            },
            {
                count: "20K+",
                name: "Happy Clients",
            },
        ],
        imgSrc: "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/about/1.png",
    };

    const technologies = {
        title: "We Deliver Expertise",
        subTitle: "Service Partners",
        slides: [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/vmware.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/azure.png",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/gcp.png",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/aws-logo.webp"
        ],
    };


    return (
        <>
            <Carousel videos={videos} slideContent={slideContent} />
            <WhyChooseUs />
            {/* <Featured featuredContent={featuredContent} /> */}
            <AboutSection />
            <WhatWeDoSection />
            <TestimonialSection />

            <ClientsSlider data={technologies}/>
            {/* <TeamSection2/> */}
            <BlogSection
                title="Latest Updates"
                subTitle={"Blogs"}
            />
            <CTASection
                title="Book your free consultation now."
                link="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2"
                linkText="Register"
            />
            {/* Contact Us  */}
        </>
    );
};

export default Home;
