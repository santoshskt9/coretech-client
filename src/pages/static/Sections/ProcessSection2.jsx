import React from 'react';
import { FiTarget } from 'react-icons/fi';


const ProcessSection2 = ({ data }) => {
    return (
        <>
            <section class="services-section-three">
                <div class="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">{data?.sectionTitle}</span>
                        <h2>{data?.title}</h2>
                    </div>

                    <div class="row">
                        {
                            data?.process?.map((process, i) => (
                                <div class="service-block-three col-lg-3 col-md-6 col-sm-12 fadeInUp">
                                    <div class="inner-box">
                                        <div class="content">
                                            <div class="icon-box"><span className="icon"><FiTarget /></span></div>
                                            <h5 class="title"><a href="page-service-details.html">{process?.title}</a></h5>
                                            <div class="text">{process?.description}</div>
                                        </div>
                                        <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessSection2;