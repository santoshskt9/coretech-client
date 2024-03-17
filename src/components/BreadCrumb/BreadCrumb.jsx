import { ArrowForwardTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { useGlobalContext } from "global/context";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = ({ heading, image, link, bread }) => {
  const route = useLocation().pathname;
//   const { token } = useGlobalContext();
  const routeArr = route.split("/");
  let Image = image ? image : `images/bg/bg1.jpg`;
  return (
    <>
      <Helmet>
        <title>{heading}</title>
        <link rel="canonical" href={"https://www.coretechinfra.com" + route} />
      </Helmet>
      <div style={{ position: "relative", overflow: "hidden" }} className="mb-0">
        <div className="w-100 h-100 p-0" style={{
          position: "absolute",
          top: 0, left: 0,
          background: `url(${Image}) no-repeat center`,
          backgroundSize: "cover",
          filter: "blur(1.1px)",
          boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.718)",
          zIndex: 10,
          height: "100vh"
        }}>
        </div>
        <section
          className="breadcrumb mb-0"
          style={{ position: "relative", zIndex: 11 }}
        >
          <div className="container pt-2 pt-lg-3 mb-0">
            <div className="">
              {/* <!-- breadcrumb --> */}
              {bread &&
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent p-0 text-lowercase">
                    {routeArr.map((rout, index) => {
                      return index === 0 ? (
                        <li key={index} className="breadcrumb-item font-weight-semebold">
                          <Link className="text-white" to="/">
                            Home
                          </Link>
                        </li>
                      ) : (
                        <li key={index} className="breadcrumb-item font-weight-semebold">
                          <Link className="text-white" to={"/" + rout}>
                            {rout}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              }
              {/* Heading  */}
              <h1 className="text-white mb-3 text-center fw-bold py-5">{heading}</h1>
              {/* {link && !token ? (
                <Link to={link}>
                  <Button size="large" endIcon={<ArrowForwardTwoTone />} variant="outlined" color="warning" className="text-capitalize rounded-pill py-3 px-4 bg-white">
                    Register Now
                  </Button>
                </Link>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </section>
      </div>
   
    </>
  );
};

export default BreadCrumb;
