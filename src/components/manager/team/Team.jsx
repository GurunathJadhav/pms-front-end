import React from "react";
import "./Team.css";
import { FaSearch, FaHome,FaArrowLeft  } from "react-icons/fa";
// import logo from "./nikitha_logo.png"; // Ensure the logo is placed correctly in your project

const Team = () => {
  return (
    <div className="dashboard-container">
      {/* Top Bar with Flexbox */}
      <div className="top-bar">
        <div className="nav-icons">
          <FaArrowLeft className="back-arrow" />
          <FaHome className="home-icon" />
        </div>
        <img src="logo.png" alt="Nikitha PMS" className="logo" />
      </div>

      {/* Content Section */}
      <div className="content-card">
        <h2 className="title">My Team</h2>
        <div className="search-filter">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search by name or email..." />
          </div>
          <button className="filter-btn">All Departments</button>
        </div>
        
        {/* Table */}
        <table className="team-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="employee-info">
                  <img src="https://via.placeholder.com/40" alt=" " className="employee-img" />
                  <div>
                  <span className="employee-name">Sarah Wilson</span>
                    <p>sarah.wilson@example.com</p>
                  </div>
                </div>
              </td>
              <td>Marketing</td>
              <td>SALE EXECUTIVE</td>
              <td>
                <button className="start-btn disabled">Start PMS</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="employee-info">
                  <img src="https://via.placeholder.com/40" alt=" " className="employee-img" />
                  <div>
                  <span className="employee-name">Ravindra</span>
                    <p>Ravi@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Engineering</td>
              <td>SDE 1</td>
              <td>
                <button className="start-btn">Start PMS</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
