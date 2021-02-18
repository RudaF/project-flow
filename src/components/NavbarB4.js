import React from "react";
import { Link } from "react-router-dom";
import flow from "./images/logo1-removebg-preview.png";

function NavbarB4() {
  return (
    <nav className="navbar is-light">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/">
            <img src={flow} width="120px" alt="Flow logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <Link to="/login" className="bd-tw-button button is-dark">
                <span>Login</span>
              </Link>
            </p>
            <p className="control">
              <Link to="/signup" className="button is-success">
                <span>Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarB4;
