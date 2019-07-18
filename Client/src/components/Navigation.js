import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light navi">
      <Link className="navbar-brand" to="/">
        Tumo Friend
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className='navbar-nav'>
          <Link className="nav-link" to="/about">
            <li className="nav-item">About</li>
          </Link>
          <Link className="nav-link" to="/signin">
            <li className="nav-item">Sign in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
