import React from "react";
import { useNavigate } from "react-router-dom";

const GetStartedSection = ({data}) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="get-started"
        className="container-fluid"
        style={{ padding: "5em 3.5em", backgroundColor: "var(--theme-color2)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <h1 style={{ fontSize: "52px", color: "white" }}>
                {data?.title}
              </h1>
              <p className="mt-4 text-light">
                {data?.description}
              </p>
            </div>
            <div className="col px-5 mx-auto" style={{height: "200px"}}>
              <button
              onClick={() => window.open('https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2','_blank', 'rel=noopener noreferrer')}
                style={{
                  width: "100%",
                  height: "50%",
                  fontSize: "35px",
                  fontWeight: "500",
                  // backgroundcolor: "white"
                  "&:hover": {
                    backgroundColor: "var(--theme-color2)",
                    color: "white"
                  }
                }}
              >
                Schedule a Meeting
              </button>
              <button
              onClick={() => navigate("/contact")}
                style={{
                  width: "100%",
                  height: "50%",
                  fontSize: "35px",
                  color: "white",
                  fontWeight: "500",
                  background:
                    "linear-gradient(121deg, rgb(0 44 111) 6%, rgb(51 1 56) 100%)",
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
