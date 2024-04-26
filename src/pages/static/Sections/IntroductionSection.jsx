import React from 'react'
import { Link } from 'react-router-dom';



const IntroductionSection = ({data}) => {
    return (
        <>
            <section className="about-section-two">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                {/* <div className="float-text">VAPT</div> */}
                                <div className="sec-title">
                                    <span className="sub-title">{data?.sectionTitle}</span>
                                    <h2>{data?.title}</h2>
                                    <div className="text">
                                        <p>
                                            {data?.description}
                                        </p>

                                        {
                                            data?.paragraphs?.map((para, i) => (
                                                <p key={i}>
                                                    {para}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        data?.features?.map((feature, i) => (
                                            <div className="about-block col-lg-6 col-md-6" key={i}>
                                                <div className="inner-box">
                                                    <i className={`icon ${feature?.iconClass}`}></i>
                                                    <h6 className="title">{feature?.title}</h6>
                                                    <div className="text">{feature?.description}</div>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>

                                <Link to={data?.cta?.buttonLink} className="theme-btn btn-style-one"><span className="btn-title">{data?.cta?.buttonText}</span></Link>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src={data?.images[0]} alt="" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src={data?.images[1]} alt="" /></figure>
                                <div className="experience bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-design"></i>
                                        <div className="text">Founded<br /> 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroductionSection;