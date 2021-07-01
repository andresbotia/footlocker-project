import React from "react";
import { Link, withRouter } from "react-router-dom";
// import footlocker from '../footlocker.png'
import logo from '../logo.svg'

function Navigation(props) {
  return (
    <div className="navigation">
      <nav style={{backgroundColor: "black"}}class="navbar navbar-expand">
        <div class="container">
          {/* <img style={{position: "absolute",left: "-0px",height: "80px",overflow: "hidden"}}src={footlocker} alt="logo"></img> */}
          <img style={{position: "absolute",height: "30px",overflow: "hidden"}}src={logo} alt="logo"></img>

          {/* <Link style={{color: "white"}} class="navbar-brand" to="/">
            Footlocker QR 
          </Link> */}
          <Link style={{color: "white"}} class="navbar-brand" to="/">
            
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
                  Meet the interns
                </Link> */}
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link style={{color: "white"}} class="nav-link" to="/contact">
                  Interns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
