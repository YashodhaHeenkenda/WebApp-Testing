import { Link } from "react-router-dom";
import React from 'react';

function common() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark shadow-lg"
        style={{ backgroundColor: "#000080" }}
      >
        <a className="navbar-brand" href="#">
          BuzzBus
        </a>
        
        {/*To collapse the sidebar */}

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
              <Link className="nav-link" to="/">
              
               Home
              </Link>
            </li>
            
            {/* <li className="nav-item"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li> */}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link"></a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login" style = {{color:'white'}} >
              
                Login
               
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default common;
