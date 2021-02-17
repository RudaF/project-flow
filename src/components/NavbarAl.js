import React from "react";
import { Link } from "react-router-dom";

class NavbarAl extends React.Component {
  render() {
    return (
      <nav className="navbar is-light">
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
                  className="bd-tw-button button is-info"
                >
                  <span>Add Transaction</span>
                </Link>
              </p>
              <p className="control">
                <Link
                  to={`/${this.props.match.params.id}/addtransaction/transactionlist`}
                  className="button is-primary"
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
