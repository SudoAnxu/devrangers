import React from "react";
import "./Navbar.css";
import logo from "./img/trp-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="pos-fix">
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 title">
            <NavLink to="/">
              <img src={logo} alt="KGPSellex" className="logo" />
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
