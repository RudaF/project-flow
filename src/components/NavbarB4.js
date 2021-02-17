import React from "react";
import { Link } from "react-router-dom";

function NavbarB4(props) {
  return (
    <nav className="navbar is-light">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <Link to="/login" className="bd-tw-button button is-info">
                <span>Login</span>
              </Link>
            </p>
            <p className="control">
              <Link to="/signup" className="button is-primary">
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