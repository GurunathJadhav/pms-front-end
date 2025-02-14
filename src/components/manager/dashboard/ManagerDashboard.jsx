import React from 'react'
import './ManagerDashboard.css'

const ManagerDashboard = () => {
  return (
    
    <div className="container">
        <div className="sidebar">
            <h2>Hi! Ravindra Kulkarni</h2>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">My Team</a></li>
                <li><a href="#">My Profile</a></li>
            </ul>
        </div>
        <div className="main-content">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <button>Logout</button>
            </div>

            <div className="stats-container">
                <div className="stat-card">
                    <h2>Total Team Members</h2>
                    <p>24</p>
                </div>
                <div className="stat-card">
                    <h2>Assessments Pending</h2>
                    <p>18/24 (75%)</p>
                </div>
                <div className="stat-card">
                    <h2>Assessments Complete</h2>
                    <p>20/24 (83%)</p>
                </div>
            </div>

            <div className="chart-container">
                <h3 className="chart-title">Assessment Completion Status</h3>
                <div className="chart-wrapper">
                    <canvas id="completionChart"></canvas>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ManagerDashboard

