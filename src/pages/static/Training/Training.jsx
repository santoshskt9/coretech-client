import React from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import Hero from "../../../components/Hero/Hero";
import { Link } from "react-router-dom";

const Training = () => {
  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Seamless Migration & Modernization",
      description:
        "Effortlessly migrate your infrastructure to the cloud and modernize your applications. Our expert team ensures a smooth transition, minimizing downtime and maximizing efficiency.",
      buttonText: "Explore Services",
      buttonNavigation: "#migration-modernization",
      animation: "fadeInRight",
    },
    {
      title: "Optimized Cloud Infrastructure",
      description:
        "Optimize your cloud infrastructure for performance, scalability, and cost-efficiency. Our cloud solutions ensure your systems are always available and fully optimized.",
      buttonText: "Learn More",
      buttonNavigation: "#optimization",
      animation: "fadeInRight",
    },
    {
      title: "Robust Cloud Infrastructure",
      description:
        "Build a robust cloud infrastructure tailored to your business needs. Our system design experts design and implement scalable, secure, and resilient cloud architectures.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#infrastructure",
      animation: "fadeInRight",
    },
  ];
  return (
    <>
      <CarouselTwo videos={videos} slideContent={slideContent} />
      <section className="course-description-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <h2 className='mb-3'>Overview</h2> */}
              <div class="sec-title">
                {/* <span class="sub-title">Overview</span> */}
                <h2><Link to="/training/cyber-security">Cyber Security Professional Training Program</Link></h2>
              </div>
              <p>
                Are you ready to step into the world of cybersecurity and become
                a proficient ethical hacker? Our comprehensive Ethical Hacking
                and Bug Bounty Training program is designed to equip you with
                the knowledge and skills needed to protect organizations from
                cyber threats and vulnerabilities.
              </p>
            </div>
            <div className="col">
              <img
                src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/cyber-security-thumbnail.png"
                alt=""
                className="w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section className="course-description-section bg-light">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              {/* <h2 className='mb-3'>Overview</h2> */}
              <div class="sec-title">
                {/* <span class="sub-title">Overview</span> */}
                <h2><Link to="/training/salesforce/administrator">Salesforce Administrator Training Program</Link></h2>
              </div>
              <p>
              As more businesses rely on data and analytics for everything from sales and marketing to planning and customer management, Salesforce Administrators are in high demand across nearly all industries and you can find a niche in anything from banking and software to healthcare and entertainment.
              </p>

            </div>
            <div className="col">
              <img
                src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/cyber-security-thumbnail.png"
                alt=""
                className="w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="course-description-section">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              {/* <h2 className='mb-3'>Overview</h2> */}
              <div class="sec-title">
                {/* <span class="sub-title">Overview</span> */}
                <h2><Link to="/training/salesforce/developer">Salesforce Developer Training Program</Link></h2>
              </div>
              <p>
              As more businesses rely on data and analytics for everything from sales and marketing to planning and customer management,&nbsp;Salesforce Developers are in high demand across nearly all industries&nbsp;and you can find a niche in anything from banking and software to healthcare and entertainment.
              </p>
            </div>
            <div className="col">
              <img
                src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/cyber-security-thumbnail.png"
                alt=""
                className="w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="call-to-action">
                {/* <div class="bg bg-pattern-8"></div> */}
                <div class="container">
                    <div class="outer-box wow fadeIn">
                        <div class="title-box">
                            <h1 class="title">Book your training today.</h1>
                            {/* <p>Take the first step towards a rewarding career in cybersecurity. <br/>Enroll in our Ethical Hacking and Bug Bounty Training program today <br/>and unleash your potential as a cybersecurity expert!</p> */}
                        </div>
                        <div class="btn-box">
                            <Link to="https://forms.office.com/pages/responsepage.aspx?id=W6tuGsfFYkWKTMDLiMweuWfF1Irzc7ZJu6YLiG8esd1UQldKWjc4SDNNRDgzQVFDVFlOVUwxQUFTTC4u" target='_blank' class="theme-btn btn-style-one light"><span class="btn-title">Enroll Now</span></Link>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
};

export default Training;
