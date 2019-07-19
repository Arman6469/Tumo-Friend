import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="container">
      <h1 className="signuptext">Sign up</h1>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLName"
          aria-describedby="emailHelp"
          placeholder="Enter Last Name"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Learning targets</label>
        <select
          multiple
          class="form-control for"
          id="exampleFormControlSelect2"
        >
          <option>Animation</option>
          <option>Programming</option>
          <option>Graphic Design</option>
          <option>Web Development</option>
          <option>Game Development</option>
        </select>
      </div>

      <div>
        <select class="custom-select">
          <option selected>Location</option>
          <option value="1">Yerevan</option>
          <option value="2">Gyumri</option>
          <option value="3">Dilijan</option>
          <option value="4">Stepanakert</option>
        </select>
      </div>
      <hr />
      <div className="submit">
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </div>
    </div>
  );
}
