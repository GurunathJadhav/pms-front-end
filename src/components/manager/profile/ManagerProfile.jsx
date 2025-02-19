import React from 'react';
import './ManagerProfile.css';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/nikithas-logo.png';
import profile from '../../../assets/images/profile1.jpg';

const ManagerProfile = () => {
  return (
    <div className="manager-container">
      <header className="manager-header">
        <div className="header-left">
          <Link to="/manager-dashboard" className="icon-link">
            <FaArrowLeft className="icon back-icon" />
          </Link>
          <Link to="/manager-dashboard" className="icon-link">
            <FaHome className="icon home-icon" />
          </Link>
        </div>
        <img src={logo} alt="Logo" className="manager-logo" />
      </header>

      <div className="manager-profile-card">
        <div className="profile-left">
          <img src={profile} alt="Profile" className="manager-profile-pic" />
        </div>
        <div className="profile-right">
          <h2>Ravi Kumar</h2>
          <p className="designation">Senior Software Engineer</p>
          <p className="location">Bangalore, Karnataka</p>
        </div>
      </div>

      <div className="manager-details">
        <div className="manager-section">
          <h3>Personal Information</h3>
          <div className="info-list">
            <p><strong>First Name:</strong> Ravi</p>
            <p><strong>Last Name:</strong> Kumar</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Blood Group:</strong> O+</p>
          </div>
        </div>

        <div className="manager-section">
          <h3>Professional Details</h3>
          <div className="info-list">
            <p><strong>Department:</strong> Engineering</p>
            <p><strong>Reporting Manager:</strong> Ravindra Kulkarni</p>
            <p><strong>Office Location:</strong> Bangalore</p>
          </div>
        </div>
      </div>

      <div className="manager-contact-info">
        <h3>Contact Information</h3>
        <div className="contact-card">
          <p><strong>Email Address:</strong> Sowmya@gmail.com</p>
        </div>
        <div className="contact-card">
          <p><strong>Mobile Number:</strong> +91 9448576765</p>
        </div>
        <div className="contact-card">
          <p><strong>Location:</strong> Bangalore, Karnataka 56756</p>
        </div>
      </div>
    </div>
  );
}

export default ManagerProfile;
