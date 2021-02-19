import React from "react";
import { Link } from "react-router-dom";
import flow from "./images/logo1-removebg-preview.png";

function Footer() {
  return (
    <footer
      className="footer fixed-bottom mt-5"
      style={{
        backgroundColor: "#2F2F2F",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        color: "#fff",
      }}
    >
      <div className="content d-flex  flex-column">
        <Link to="/" className="ml-5">
          <img src={flow} width="300px" alt="Flow logo" />
        </Link>
        <p className="m-5 fixed-bottom">
          <strong style={{ color: "#48C78E" }}>Flow</strong> by{" "}
          <a href="https://www.linkedin.com/in/driele-de-aquino-nogueira-4b7b8b37/">
            Driele Nogueira
          </a>{" "}
          and
          <a href="https://www.linkedin.com/in/rudafloresta/"> Rudá Floresta</a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
