import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <a className="navbar-brand" href="login">
          Login
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <a className="nav-link" href="signup">
              Sign up<span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="home">
              Home
            </a>
            <a className="nav-link" href="logout">
              Logout
            </a>
            <a className="nav-link disabled" href="about">
              About us
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
