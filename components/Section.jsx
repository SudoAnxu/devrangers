import React from "react";
import { NavLink } from "react-router-dom";
import float from "./img/float.png";

function Section() {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <h1>
                  <div className="a-perfect-place">A perfect place</div>

                  <div className="brand-name">
                    <strong className="brand-name">KGP-SELLEX</strong>
                  </div>
                </h1>

                <div className="mt-3 d-flex flex-row">
                  <NavLink
                    to="/buy"
                    className="btn-get-started mx-2 mb-3 btn-anim"
                  >
                    BUY
                  </NavLink>
                  <NavLink
                    to="/sell"
                    className="btn-get-started mx-2 mb-3 btn-anim"
                  >
                    SELL
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/about"
                    className="btn-get-started mx-2 mb-5 btn-anim-about-us"
                  >
                    ABOUT US
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img margin-custom d-flex justify-content-center floater-anim">
                <img
                  src={float}
                  className="img-fluid animated"
                  alt=""
                  id="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
