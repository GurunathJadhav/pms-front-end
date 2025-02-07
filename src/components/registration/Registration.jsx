import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
<div className="wrapper">
  <h2>Registration Form</h2>
  <form>
    <div className="form-container">
      <div className="left-section">
        <div className="input-box">
          <input type="text" name="employeeId" placeholder="Enter Employee ID" />
        </div>
        <div className="input-box">
          <input type="text" name="firstName" placeholder="Enter First Name" />
        </div>
        <div className="input-box">
          <input type="text" name="lastName" placeholder="Enter Last Name" />
        </div>
      </div>
      <div className="right-section">
        <div className="input-box">
          <input type="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Create Password" />
        </div>
        <div className="input-box">
          <select name="role">
            <option>Select Role</option>
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
          </select>
        </div>
      </div>
    </div>
    <div className="input-box button center">
      <input type="submit" value="Register Now" />
    </div>
    <div className="text">
      <h3>Already have an account? <Link to={"/"}>Login</Link></h3>
    </div>
  </form>
</div>

  )
}

export default Registration
