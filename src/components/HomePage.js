import React from "react";
import cel from "./images/celular.png";

function HomePage() {
  return (
    <div className="tile is-ancestor m-5">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Online financial control system</p>
          <p>Complete, easy to use and free.</p>
        </div>
        <div className="tile is-child box">
          <p className="title">Time is money</p>
          <p>In Flow you control your money in seconds and don't waste time. Keep everything under control and enjoy your time with what really matters to you!</p>
        </div>
      </div>
      
      <div className="tile is-parent">
        <div className="tile is-child">
          
        </div>
      </div>

      <div className="tile is-parent">
        <div className="tile is-child">
          <figure className="has-ratio" width="640" height="360">
            <img src={cel} />
          </figure>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
