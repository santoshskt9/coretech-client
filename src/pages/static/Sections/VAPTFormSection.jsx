import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VAPTFormSection = () => {
    const vaptFormik = useFormik({
        initialValues: {
            companyName: '',
            email: '',
            phone: '',
            turnover: '',
            domains: '',
            testBoxDetails: ''
        },
        validationSchema: Yup.object().shape({
            companyName: Yup.string()
                .required('Business name is required')
                .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid characters in business name'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .required('Phone number is required')
                .matches(/^\d{10}$/, 'Invalid phone number format'),
            turnover: Yup.number()
                .typeError('Annual turnover must be a number')
                .required('Annual turnover is required')
                .positive('Annual turnover must be positive'),
            domains: Yup.string()
                .required('List of domains is required')
                .matches(/^[\w\.\-\s,]+$/, 'Invalid characters in domain list'),
            testBoxDetails: Yup.string()
                .required('Test box details are required')
                .matches(/^[\w\.\-\s]+$/, 'Invalid characters in test box details'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <section id='form' className="contact-section" style={{overflowX: "hidden"}}> 
            <div className="container">
                <div className="row">
                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Register</span>
                                    <h2>Get a free sample audit</h2>
                                </div>

                                {/* Contact Form */}
                                <form id="contact-form" onSubmit={vaptFormik.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" id="companyName" name="companyName" placeholder="Business Name" {...vaptFormik.getFieldProps('companyName')} />
                                            {vaptFormik.touched.companyName && vaptFormik.errors.companyName ? <div className="text-danger">{vaptFormik.errors.companyName}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="email" id="email" name="email" placeholder="Email Address" {...vaptFormik.getFieldProps('email')} />
                                            {vaptFormik.touched.email && vaptFormik.errors.email ? <div className="text-danger">{vaptFormik.errors.email}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="phone" placeholder="Phone" {...vaptFormik.getFieldProps('phone')} />
                                            {vaptFormik.touched.phone && vaptFormik.errors.phone ? <div className="text-danger">{vaptFormik.errors.phone}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="turnover" placeholder="Annual Turnover" {...vaptFormik.getFieldProps('turnover')} />
                                            {vaptFormik.touched.turnover && vaptFormik.errors.turnover ? <div className="text-danger">{vaptFormik.errors.turnover}</div> : null}
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <textarea id="domains" name="domains" placeholder='List of Domains for VAPT Testing' {...vaptFormik.getFieldProps('domains')} />
                                            {vaptFormik.touched.domains && vaptFormik.errors.domains ? <div className="text-danger">{vaptFormik.errors.domains}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <textarea id="testBoxDetails" name="testBoxDetails" placeholder="Details of Test Box to be Tested" {...vaptFormik.getFieldProps('testBoxDetails')} />
                                            {vaptFormik.touched.testBoxDetails && vaptFormik.errors.testBoxDetails ? <div className="text-danger">{vaptFormik.errors.testBoxDetails}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12" >
                        <div className="inner-column">
                            <figure className="image"><img src="images/resource/contact.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VAPTFormSection;
