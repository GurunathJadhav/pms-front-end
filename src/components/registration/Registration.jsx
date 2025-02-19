import React, { useState } from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Registration = () => {

const[registration, setRegistration]=useState({
  hrId:"",
  firstName:"",
  lastName:"",
  email:"",
  password:""
})



const {hrId,firstName,lastName,email,password}= registration


const onInputChange = (e) => {
  setRegistration({ ...registration, [e.target.name]: e.target.value });
};

const onSubmit = async (e) => {
  e.preventDefault();
  const result= await axios.post("http://localhost:8080/api/v1/pms/registration/hr-registration", registration)
  console.log(result)
  // console.log(registration)
}


return (

<div className="wrapper">
      <div className="content-container">
        {/* Form Section */}
        <div className="form-section">
          <h2>Registration Form</h2>
          <form  onSubmit={onSubmit}>
            <div className="form-container">
            <div className="input-box">
              
              <label htmlFor="Employee ID">Employee ID</label>
              <input type="text" name="hrId" placeholder=" Enter your Employee ID"  required 
                value={hrId}
                onChange={onInputChange} />
            </div>
              <div className="input-box">
              
                <label htmlFor="First Name">Firstname</label>
                <input type="text" name="firstName" placeholder=" Enter your firstname" required 
                value={firstName}
                onChange={onInputChange}/>
              </div>
              <div className="input-box">
              <label htmlFor="Last Name">Lastname</label>
                <input type="text" name="lastName" placeholder=" Enter your lastname" required 
                value={lastName}
                onChange={onInputChange}/>
              </div>
              <div className="input-box">
              <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" required 
                value={email}
                onChange={onInputChange}/>
              </div>
              <div className="input-box">
              <label htmlFor="Password">Password</label>
                <input type="password" name="password" placeholder="Create your password" required 
                value={password}
                onChange={onInputChange}/>
              </div>
            </div>
            <div className="input-box button">
              <input type="submit" value="Register Now" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <Link to="/" className="Login-link">Login</Link>
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
