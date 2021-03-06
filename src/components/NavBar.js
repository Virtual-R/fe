import React, {useHistory} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
 
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg mx=auto" >

        <a className="navbar-brand" href="/landingpage">
          Marketing Page
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
        <p>:</p>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item active">
              <a className="nav-link" id="home" href="/">
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="signup">
                Sign-Up
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href='login'
        >
                Login
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem('user_id');
                  window.location.href= "/"}}>
                  Logout
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href='/addproject'
        >
               Add Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
