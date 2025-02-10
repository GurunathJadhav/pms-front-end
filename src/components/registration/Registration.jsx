import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'


const Registration = () => {
  return (
<div className="wrapper">
      <div className="content-container">
        {/* Form Section */}
        <div className="form-section">
          <h2>Registration Form</h2>
          <form>
            <div className="form-container">
              <div className="input-box">
              
                <label htmlFor="First Name">Firstname</label>
                <input type="text" name="firstName" placeholder=" First Name" />
              </div>
              <div className="input-box">
              <label htmlFor="Last Name">Lastname</label>
                <input type="text" name="lastName" placeholder=" Last Name" />
              </div>
              <div className="input-box">
              <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box">
              <label htmlFor="Password">Password</label>
                <input type="password" name="password" placeholder="Create Your Password" />
              </div>
            </div>
            <div className="input-box button">
              <input type="submit" value="Register Now" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <Link to="/" className="Login-link">login</Link>
              </h3>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/assets/images/login-icon-3.jpg" alt='' />
        </div>
      </div>

      
    </div>

  )
}

export default Registration
