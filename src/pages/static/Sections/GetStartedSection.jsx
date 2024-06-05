import React from "react";

const GetStartedSection = ({data}) => {
  return (
    <>
      <section
        id="get-started"
        className="container-fluid"
        style={{ padding: "5em 3.5em", backgroundColor: "#ffd100" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <h1 style={{ fontSize: "52px", color: "brown" }}>
                {data?.title}
              </h1>
              <p className="mt-4">
                {data?.description}
              </p>
            </div>
            <div className="col px-5 mx-auto" style={{height: "200px"}}>
              <button
                style={{
                  width: "100%",
                  height: "50%",
                  fontSize: "35px",
                  fontWeight: "500",
                  // backgroundcolor: "white"
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white"
                  }
                }}
              >
                Schedule a Meeting
              </button>
              <button
                style={{
                  width: "100%",
                  height: "50%",
                  fontSize: "35px",
                  color: "white",
                  fontWeight: "500",
                  background:
                    "linear-gradient(121deg, rgb(221 112 0) 6%, rgb(33, 56, 1) 100%)",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedSection;
