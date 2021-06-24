import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav style={{backgroundColor: "black"}}class="navbar navbar-expand">
        <div class="container">
          
          <Link style={{color: "white"}} class="navbar-brand" to="/">
            Footlocker QR 
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link style={{color: "white"}} class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                {/* <Link class="nav-link" to="/about">
                  About
                </Link> */}
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                {/* <Link class="nav-link" to="/contact">
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
