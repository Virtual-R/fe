import React, {useHistory} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
 
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg  bg-light mx=auto" >


        <a className="navbar-brand" href="/">
          Home
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

            <li className="nav-item active">
              <a className="nav-link" href="signup">
                Sign up<span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="login">
                Log In
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
            
            <li className="nav-item">
              <a className="nav-link" href='/landingpage'
        >
               Marketing Page
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
