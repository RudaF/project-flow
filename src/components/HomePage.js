import React from "react";
import cel from "./images/celular.png";

function HomePage() {
  return (
    <div className="tile is-ancestor m-5">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box message is-success">
          <div className="message-header">
            <strong className="is-size-3">
              Online financial control system
            </strong>
          </div>
          <div className="message-body">
            <ul>
              <li>
                <strong className="is-size-3">Complete</strong>
              </li>
              <li>
                <strong className="is-size-3">User-friendly</strong>
              </li>
              <li>
                <strong className="is-size-3">Free!</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="tile is-child box message is-info">
          <div className="message-header">
            <strong className="is-size-3">Time is money!</strong>
          </div>
          <div className="message-body has-text-centered">
            <p>
              In Flow you control your money in seconds and don't waste time.
              Keep everything under control and enjoy your time with what really
              matters to you!
            </p>
          </div>
        </div>
      </div>

      <div className="tile is-parent">
        <div className="tile is-child"></div>
      </div>

      <div className="tile is-parent">
        <div className="tile is-child">
          <figure className="has-ratio" width="640" height="360">
            <img src={cel} alt="cellphone displaying financial results" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
