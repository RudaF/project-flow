import React from "react";

function Navbar() {
    return (
        <nav className="navbar is-light">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="bd-tw-button button is-info" >
              
                                <span>Login</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary" >
              
                                <span>Signup</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
   
}

export default Navbar;