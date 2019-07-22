import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import myapi from "../api/myapi";
import {Redirect} from 'react-router'

export default function Signin() {
const [value, setValue] = useState('');
const [valuePass, setValuePass] = useState('')
const [error, setError] = useState('')
const [email, setEmail] = useState([]);



const handleEmailSend = async  (term, termpass) => {
  try {
    const response = await myapi.get(`/students/${term}`, {
      auth:{
        username: term,
        password: termpass
      }
    })
    setEmail(response.json())
  } catch (error) {
    setError('We are sorry something went wrong !')
  }
}
const handleEmailChange = (event) => setValue(event.target.value)
const handlePasswordChange = (event) => setValuePass(event.target.value)

useEffect(() => {
  handleEmailSend()
}, [value])



const handleSubmit = (e) => {
  e.preventDefault()
  handleEmailSend(value, valuePass)
}


if (email) {
  return (
    <Redirect to="/" />
     
  )
}

  return (
    <form onSubmit = {handleSubmit}>
      <div className="bgc">
        <div className="container logindiv">
          <div>
            <h1 className="logintext">Login</h1>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange= {handleEmailChange}
            />
            <small id="emailHelp" className="form-text text-muted entertext">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange= {handlePasswordChange}
            />
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary">
             Log in
            </button>
          </div>
          <hr />
          <div>
            <p className="dont">
              Don't have an account ? <Link to="signup">Sign up here!</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
