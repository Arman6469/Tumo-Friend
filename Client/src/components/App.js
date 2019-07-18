import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.png";
import {Link} from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div className="bgimage">
    <div>
      <img src={Logo} alt="logo" className="logo" />
      <p className="start">Let's <Link to='signup'>Login</Link> and Start</p>
      </div>
    </div>
  );
}
