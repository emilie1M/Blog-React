import React from "react"
import "./register.css"
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
            <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input 
            type="text"
            className="registerInput" 
            placeholder="Enter your Username ..." 
          />
          <label>Email</label>
          <input 
            type="text"
            className="registerInput" 
            placeholder="Enter your Email ..." />
          <label>Password</label>
          <input 
            type="Password" 
            className="registerInput" 
            placeholder="Enter your Password ..." 
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}

export default Register