import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mt-5 order-2 order-lg-1 d-flex justify-content-center flex-column page-content">
                <h1>
                  {props.name}
                  <strong className="brand-name"> {props.title}</strong>
                </h1>
                <h2 className="my-3 brand-bio">{props.subtitle}</h2>
                <div className="mt-3">
                  <Link to={props.visit} className="btn-get-started">
                    {props.btname}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 mt-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="home image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
