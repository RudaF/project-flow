import React from "react";
import { Link } from "react-router-dom";
import flow from "./images/flowMainLogo.png";

const style = {
  backgroundColor: "#2F2F2F",
  color: "#ffff",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "200px",
  width: "100%",
};

const phantom = {
  display: "block",
  padding: "20px",
  height: "200px",
  width: "100%",
};

function Footer() {
  return (
    <div style={phantom}>
      <div style={style} className="d-flex">
        <Link to="/" className="ml-5">
          <img className="mt-4" src={flow} width="300px" alt="Flow logo" />
        </Link>
        <div className="container">
          <p className="mt-6">
            <strong style={{ color: "#48C78E" }}>Flow</strong> by{" "}
            <a href="https://www.linkedin.com/in/driele-de-aquino-nogueira-4b7b8b37/">
              Driele Nogueira
            </a>{" "}
            and
            <a href="https://www.linkedin.com/in/rudafloresta/">
              {" "}
              Rudá Floresta
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
