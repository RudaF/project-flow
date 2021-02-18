import React from "react";
import { Link } from "react-router-dom";
import flow from "./images/logo1-removebg-preview.png";

class NavbarAl extends React.Component {
  render() {
    return (
      <nav className="navbar is-light">
          <div className="navbar-brand">
            <img src={flow} width="112" height="28" />
          </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to={`/${this.props.match.params.id}`} className="navbar-item">
              Home
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link
                  to={`/${this.props.match.params.id}/addtransaction`}
                  className="bd-tw-button button is-dark"
                >
                  <span>Add Transaction</span>
                </Link>
              </p>
              <p className="control">
                <Link
                  to={`/${this.props.match.params.id}/transactionlist`}
                  className="button is-success"
                >
                  <span>Transactions</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarAl;
