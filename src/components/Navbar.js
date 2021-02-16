import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-light">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <Link to="/login" className="bd-tw-button button is-info">
                <span>Login</span>
              </Link>
            </p>
            <p className="control">
              <Link to="/signin" className="button is-primary">
                <span>Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
