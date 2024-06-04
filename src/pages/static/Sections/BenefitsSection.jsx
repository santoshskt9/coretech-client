import React from "react";

const BenefitsSection = ({ data }) => {
  return (
    <>
      <section
        className="container-fluid"
        id="benefits"
        style={{ padding: "5em 3.5em" }}
      >
        <div className="container">
          <div className="">
            <h1
              style={{ fontSize: "52px", color: "brown" }}
              className="text-center"
            >
              <b>The Coretech Approach</b> to <i>{data?.sectionTitle}</i>
            </h1>
          </div>
          <div className="">
            <p className="text-center">{data?.description}</p>
          </div>
        </div>
        <h2
          style={{
            marginTop: "2em",
            fontSize: "2.2rem",
            color: "brown",
            textAlign: "center",
          }}
        >
          {data?.title}
        </h2>

        <div className="container d-flex justify-content-between flex-wrap">
          {data?.services?.map((benefit, index) => (
            <div
            key={index}
              className="service-benefits d-flex align-items-center"
              style={{ maxWidth: "30%", marginTop: "3.5rem" }}
            >
              <i
                className={`icon flaticon-concept`}
                style={{
                  fontSize: "70px",
                  marginRight: "25px",
                  color: "black",
                }}
              ></i>
              <div className="benefits-content">
                <h5 style={{ fontWeight: "bold", color: "brown" }}>
                  {benefit?.title}
                </h5>
                <p>{benefit?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
