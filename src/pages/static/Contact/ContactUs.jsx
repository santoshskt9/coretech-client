import React, { useEffect } from "react";
import BreadCrumb2 from "../../../components/BreadCrumb/BreadCrumb2";
import {
  PiEnvelope,
  PiEnvelopeFill,
  PiNavigationArrowFill,
  PiPhoneCallFill,
} from "react-icons/pi";
import "./ContactUs.css";
import { FaMap } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../../../global/context";
import toast from "react-hot-toast";

const ContactUs = () => {
  const { api } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      phone: Yup.string(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Handle form submission here
      console.log(values);

      setSubmitting(false);
      try {
        const res = await api.post("/api/contactus", values);
        if (res?.status === 201) {
          resetForm();
          toast.success("Your message sent to our support team");
        }
      } catch (error) {
        toast.error(error?.message);
      }
    },
  });
  return (
    <>
      <BreadCrumb2 heading="Contact Us" />

      <section className="contact-details my-5">
        <div className="container ">
          <div className="row">
            <div className="col-xl-5 col-lg-6 mb-md-60">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text fw-light">
                    For any inquiries, feedback, or collaboration opportunities,
                    please don't hesitate to reach out to us. Our corporate
                    office is dedicated to providing excellent support and
                    fostering meaningful connections with our stakeholders.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon icon-contact">
                      <PiPhoneCallFill />
                    </div>
                    <div className="contact-items">
                      <h4>Have any question?</h4>
                      <a href="tel:+19452785774">USA: +1 (945) 278 5774</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon icon-contact">
                      <PiEnvelopeFill />
                    </div>
                    <div className="contact-items">
                      <h4>Write email</h4>
                      <a href="mailto:info@coretecchinfra.com">
                        info@coretechinfra.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon icon-contact">
                      <PiNavigationArrowFill />
                    </div>
                    <div className="contact-items">
                      <h4>Visit anytime</h4>
                      <span>
                        Vista Point North <br />
                        405 State Highway 121, <br />
                        Suite A250, Lewisville, <br />
                        Texas, 75067, USA
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              {/* <!-- Google Map HTML Codes --> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3346.4578352604344!2d-96.981067!3d32.991703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2e6ea5f206db%3A0x1e31269da04d94f1!2sRegus%20-%20Lewisville%20-%20Vista%20Point%20North!5e0!3m2!1sen!2sin!4v1714313080357!5m2!1sen!2sin"
                width="100%"
                height="550"
                className="rounded-4"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Office Addresses */}
      <section className="office-addresses mb-5">
        <div className="container">
          <div class="sec-title text-center">
            <span class="sub-title">Other Offices</span>
            <h2 class="section-title__title">Offices in India</h2>
          </div>
          <div className="row">
            <div className="col office">
              <h3>Uttar Pradesh</h3>
              <ul className="list-unstyled contact-details__offices">
                <li>
                  <div className="icon icon-contact">
                    <PiPhoneCallFill />
                  </div>
                  <div className="contact-items">
                    <h4>Call Us</h4>
                    <a href="tel:+918050572875">+91 (805)-0572875</a>
                  </div>
                </li>
                <li>
                  <div className="icon icon-contact">
                    <PiEnvelopeFill />
                  </div>
                  <div className="contact-items">
                    <h4>Write email</h4>
                    <a href="mailto:info@coretechinfra.com">
                      info@coretechinfra.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon icon-contact">
                    <PiNavigationArrowFill />
                  </div>
                  <div className="contact-items">
                    <h4>Visit anytime</h4>
                    <a href="https://maps.app.goo.gl/42UdWMYrBT3T4CpX8">
                      Plot No 9, A Block, Ambedkarnagar, <br /> Shaktinagar,
                      Sonebhadra, Uttar Pradesh, <br />
                      India - 231222
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col office">
              <h3>Karnataka</h3>
              <ul className="list-unstyled contact-details__offices">
                <li>
                  <div className="icon icon-contact">
                    <PiPhoneCallFill />
                  </div>
                  <div className="contact-items">
                    <h4>Call Us</h4>
                    <a href="tel:+918050572875">+91 (805)-0572875</a>
                  </div>
                </li>
                <li>
                  <div className="icon icon-contact">
                    <PiEnvelopeFill />
                  </div>
                  <div className="contact-items">
                    <h4>Write email</h4>
                    <a href="mailto:info@coretechinfra.com">
                      info@coretechinfra.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon icon-contact">
                    <PiNavigationArrowFill />
                  </div>
                  <div className="contact-items">
                    <h4>Visit anytime</h4>
                    <a href="#">
                      6G 601, Provident Sunworth <br/>Mysore Road Kengeri,
                      Venkatapura <br/>Bangalore 560060
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-contact-form">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <span className="sub-title">Contact With Us Now</span>
            <h2 className="section-title__title">
              Feel Free to Write Our <br /> Technology Experts
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                id="contact_form"
                name="contact_form"
                onSubmit={formik.handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.subject && formik.errors.subject ? (
                        <div className="error">{formik.errors.subject}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="error">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control required"
                    rows="5"
                    placeholder="Enter Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="error">{formik.errors.message}</div>
                  ) : null}
                </div>
                <div className="mb-3 text-center">
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    disabled={formik.isSubmitting}
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
