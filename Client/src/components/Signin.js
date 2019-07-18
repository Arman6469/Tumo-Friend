import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  return (
    <form>
      <div className="bgc">
        <div className="container logindiv">
          <div>
            <h1 className="logintext">Login</h1>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted entertext">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr />
          <div>
            <p>
              Don't have an account ? <Link to="signup">Sign up here!</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
