import React from 'react'
import './Registration.css'

const Registration = () => {
  return (
<div className="wrapper">
      <h2>Registration Form</h2>
      <form >
        <div className="input-box">
          <input type="text" name="employeeId" placeholder="Enter Employee ID"/>
        </div>
        <div className="input-box">
          <input type="text" name="firstName" placeholder="Enter First Name" />
        </div>
        <div className="input-box">
          <input type="text" name="lastName" placeholder="Enter Last Name"/>
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Create Password"/>
        </div>
        <div className="input-box">
          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
        </div>
        <div className="input-box">
          <input type="text" />
          <select name="role">
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className="policy">
          <input type="checkbox" name="acceptedTerms"  />
          <h3>I accept all terms & conditions</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>
        <div className="text">
          <h3>Already have an account? <a href="#">Login now</a></h3>
        </div>
      </form>
    </div>
  )
}

export default Registration
