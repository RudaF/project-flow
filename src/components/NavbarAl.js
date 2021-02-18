import React from "react";
import { Link } from "react-router-dom";
import flow from "./images/logo1-removebg-preview.png";

class NavbarAl extends React.Component {
  render() {
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
              <p className="control">
                <Link
                  to={`/${this.props.match.params.id}/watchlist`}
                  className="button is-danger"
                >
                  <span>Investment Watchlist</span>
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
