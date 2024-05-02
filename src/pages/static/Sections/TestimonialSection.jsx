import React from 'react'
import CounterBlockTwo from '../../../components/Counter/CounterBlockTwo';
import Slider from 'react-slick';
import { DockTwoTone } from '@mui/icons-material';

const testimonials = [
    {
        "avatarUrl": "images/resource/thumb-1.jpg",
        "name": "Emily Watson",
        "designation": "CEO",
        "review": "Coretech Infrastructure Solutions Inc. has been our trusted partner for VAPT services. Their team's professionalism and attention to detail helped us identify and mitigate potential security risks effectively.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-2.jpg",
        "name": "John Smith",
        "designation": "CTO",
        "review": "We relied on Coretech Infrastructure Solutions Inc. for cyber security solutions, and they exceeded our expectations. Their proactive approach and expertise in the field ensured our digital assets remained protected.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-3.jpg",
        "name": "Sophia Johnson",
        "designation": "Head of Development",
        "review": "Coretech Infrastructure Solutions Inc. provided us with top-notch development services. Their team's technical proficiency and commitment to quality resulted in innovative solutions that aligned perfectly with our business needs.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-4.jpg",
        "name": "Michael Brown",
        "designation": "Training Manager",
        "review": "The corporate training programs offered by Coretech Infrastructure Solutions Inc. were instrumental in enhancing our team's skills. Their tailored approach and comprehensive curriculum empowered us to tackle emerging IT challenges effectively.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-5.jpg",
        "name": "Sarah Adams",
        "designation": "IT Manager",
        "review": "We're extremely satisfied with Coretech Infrastructure Solutions Inc.'s cloud services. Their expertise in cloud computing helped us optimize our infrastructure for scalability and security while reducing operational costs.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-6.jpg",
        "name": "David Wilson",
        "designation": "Operations Manager",
        "review": "Choosing Coretech Infrastructure Solutions Inc. for managed services was a game-changer for our organization. Their proactive approach and swift response to any issues ensured seamless IT operations, allowing us to focus on our core business.",
        "rating": 5
    }
];


const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="testimonial-section-three">
            <div className="container-fluid p-0">
                <div className="outer-box">
                    <div className="carousel-outer">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, i) => (
                                <div className="testimonial-block-three" key={i}>
                                    <div className="inner-box">
                                        <div className="thumb">
                                            <img src={testimonial?.avatarUrl} alt="" />
                                            <span className="icon fa fa-quote-right"></span>
                                        </div>
                                        <div className="text">{testimonial?.review}</div>
                                        <h6 className="name">{testimonial?.name} <span className="designation"> - &nbsp; {testimonial?.designation}</span></h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    {/* Add the rest of your component structure here */}
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;